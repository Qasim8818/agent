#!/usr/bin/env ts-node
/**
 * ==================== TRUTH LAYER - API ENTRYPOINT ====================
 * Main entry point for NestJS application
 * Handles device registration, media verification, and blockchain anchoring
 * 
 * Endpoints:
 *   POST   /api/v1/devices/register           Device registration with TPM
 *   GET    /api/v1/devices/:deviceId          Device info & verification history
 *   POST   /api/v1/media/upload               Media upload & signature
 *   GET    /api/v1/verify/:mediaHash          Verification status & proof
 *   GET    /api/v1/verify/:mediaHash/proof    Download ZK proof
 *   POST   /api/v1/batch/verify               Batch verification
 */

import { NestFactory } from '@nestjs/core';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import compression from 'compression';
import * as cors from 'cors';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { setupSwagger } from './swagger.config';
import { Logger } from 'winston';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = app.get<Logger>(WINSTON_MODULE_NEST_PROVIDER);

  const port = configService.get<number>('PORT') || 3000;
  const nodeEnv = configService.get<string>('NODE_ENV') || 'development';
  const logLevel = configService.get<string>('LOG_LEVEL') || 'info';

  logger.info(`[BOOTSTRAP] Starting Truth Layer API on port ${port} (${nodeEnv})`);

  // ==================== SECURITY MIDDLEWARE ====================
  
  // Helmet - HTTP headers hardening
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'"],
      },
    },
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  }));

  // CORS configuration
  const corsOptions = {
    origin: configService.get<string>('CORS_ORIGINS')?.split(',') || ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key', 'X-Device-Id'],
    optionsSuccessStatus: 200,
    maxAge: 3600,
  };
  app.use(cors(corsOptions));
  logger.debug(`[CORS] Enabled for origins: ${corsOptions.origin.join(', ')}`);

  // Compression middleware
  app.use(compression({
    threshold: 1024,
    level: 6,
    filter: (req, res) => {
      if (req.headers['x-no-compression']) return false;
      return compression.filter(req, res);
    },
  }));

  // ==================== REQUEST/RESPONSE VALIDATION ====================

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      exceptionFactory: (errors) => {
        const messages = errors.map((error) => {
          const constraints = Object.values(error.constraints || {});
          return `${error.property}: ${constraints.join(', ')}`;
        });
        logger.warn(`[VALIDATION] Invalid request: ${messages.join('; ')}`);
        return new BadRequestException({
          error: 'VALIDATION_ERROR',
          message: 'Invalid request payload',
          details: messages,
        });
      },
    }),
  );

  // ==================== GLOBAL INTERCEPTORS & FILTERS ====================

  // Logging interceptor
  app.useGlobalInterceptors(new LoggingInterceptor(logger));

  // Global exception filter
  app.useGlobalFilters(new GlobalExceptionFilter(logger));

  // ==================== API DOCUMENTATION ====================

  if (nodeEnv === 'development') {
    setupSwagger(app);
    logger.info('[SWAGGER] API documentation available at http://localhost:' + port + '/api/docs');
  }

  // ==================== GRACEFUL SHUTDOWN ====================

  const gracefulShutdown = async (signal: string) => {
    logger.info(`[SHUTDOWN] Received ${signal}, starting graceful shutdown...`);
    
    // Close database connections
    const prismaService = app.get('PrismaService');
    if (prismaService) {
      await prismaService.$disconnect();
      logger.info('[SHUTDOWN] Disconnected from database');
    }

    // Close Redis connection
    const redisService = app.get('RedisService');
    if (redisService) {
      await redisService.closeConnection();
      logger.info('[SHUTDOWN] Disconnected from Redis');
    }

    // Close queues
    const bullQueue = app.get('BullQueue');
    if (bullQueue) {
      await bullQueue.close();
      logger.info('[SHUTDOWN] Closed job queues');
    }

    await app.close();
    logger.info('[SHUTDOWN] Application closed');
    process.exit(0);
  };

  process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
  process.on('SIGINT', () => gracefulShutdown('SIGINT'));

  // ==================== HEALTH CHECK ====================

  app.setGlobalPrefix('api/v1');

  // Health endpoint (no auth required)
  app.get('/health', () => ({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: nodeEnv,
  }));

  // ==================== STARTUP ====================

  await app.listen(port, '0.0.0.0', () => {
    logger.info(`╔════════════════════════════════════════════════════════════╗`);
    logger.info(`║  TRUTH LAYER API - NODE ZERO                              ║`);
    logger.info(`║  ${new Date().toISOString()}                    ║`);
    logger.info(`╠════════════════════════════════════════════════════════════╣`);
    logger.info(`║  🌍 Server running on: http://0.0.0.0:${port}`);
    logger.info(`║  📊 Health check: http://localhost:${port}/health`);
    if (nodeEnv === 'development') {
      logger.info(`║  📖 API Docs: http://localhost:${port}/api/docs`);
    }
    logger.info(`║  🔐 Environment: ${nodeEnv.toUpperCase()}`);
    logger.info(`║  📈 Log Level: ${logLevel.toUpperCase()}`);
    logger.info(`╚════════════════════════════════════════════════════════════╝`);

    // ==================== STARTUP DIAGNOSTICS ====================
    
    // Queue status
    logger.info(`[STARTUP] Verifying dependent services...`);
    const verifyServices = async () => {
      try {
        const prismaService = app.get('PrismaService');
        const dbHealthCheck = await prismaService.$queryRaw`SELECT 1 as status`;
        logger.info(`[STARTUP] ✅ PostgreSQL connected`);
      } catch (error) {
        logger.error(`[STARTUP] ❌ PostgreSQL connection failed: ${error.message}`);
      }

      try {
        const redisService = app.get('RedisService');
        await redisService.ping();
        logger.info(`[STARTUP] ✅ Redis connected`);
      } catch (error) {
        logger.error(`[STARTUP] ❌ Redis connection failed: ${error.message}`);
      }
    };

    setTimeout(verifyServices, 1000);
  });
}

bootstrap().catch((error) => {
  console.error('[BOOTSTRAP ERROR]', error);
  process.exit(1);
});
