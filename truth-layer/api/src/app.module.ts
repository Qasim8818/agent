/**
 * ==================== TRUTH LAYER - APP MODULE ====================
 * Root module that orchestrates all application features
 * 
 * Modules:
 *   - ConfigModule: Environment configuration management
 *   - DatabaseModule: Prisma ORM + PostgreSQL
 *   - RedisModule: Caching & session management
 *   - DeviceModule: Device registration & management
 *   - MediaModule: Media upload & processing
 *   - VerificationModule: ZK proof generation & blockchain anchoring
 */

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

// Modules
import { DatabaseModule } from './database/database.module';
import { RedisModule } from './redis/redis.module';
import { DeviceModule } from './features/device/device.module';
import { MediaModule } from './features/media/media.module';
import { VerificationModule } from './features/verification/verification.module';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from './common/logger/logger.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    // ==================== CONFIGURATION ====================
    
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: Joi.object({
        // Node environment
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        PORT: Joi.number().default(3000),
        LOG_LEVEL: Joi.string()
          .valid('error', 'warn', 'info', 'debug', 'verbose')
          .default('info'),

        // Database
        DATABASE_URL: Joi.string().required(),
        DATABASE_POOL_MIN: Joi.number().default(5),
        DATABASE_POOL_MAX: Joi.number().default(20),
        DATABASE_LOGGING: Joi.boolean().default(false),

        // Redis
        REDIS_URL: Joi.string().default('redis://localhost:6379'),
        REDIS_TTL: Joi.number().default(3600),
        REDIS_MAX_RETRIES: Joi.number().default(3),

        // ClickHouse
        CLICKHOUSE_URL: Joi.string().default('http://localhost:8123'),
        CLICKHOUSE_USER: Joi.string().default('default'),
        CLICKHOUSE_PASSWORD: Joi.string().default(''),

        // ZK Engine
        ZK_ENGINE_URL: Joi.string().default('http://localhost:50051'),
        ZK_PROOF_TIMEOUT: Joi.number().default(120000),
        ZK_BATCH_SIZE: Joi.number().default(10),
        ZK_GPU_ENABLED: Joi.boolean().default(false),

        // Blockchain
        ARWEAVE_NODE: Joi.string().default('https://arweave.net'),
        ARWEAVE_KEY: Joi.string().optional(),
        SOLANA_RPC: Joi.string().default('https://api.devnet.solana.com'),
        SOLANA_PAYER: Joi.string().optional(),
        ETHEREUM_RPC: Joi.string().optional(),

        // IPFS
        IPFS_API: Joi.string().default('http://localhost:5001'),
        IPFS_GATEWAY: Joi.string().default('https://gateway.pinata.cloud'),

        // Security
        JWT_SECRET: Joi.string().default('dev-jwt-secret-change-in-production'),
        JWT_EXPIRATION: Joi.string().default('24h'),
        API_KEY_SECRET: Joi.string().default('dev-api-key-secret-change-in-production'),
CORS_ORIGINS: Joi.string().default('http://localhost:3000,http://localhost:3001'),
        API_KEYS: Joi.string().required().description('Comma-separated API keys for X-API-Key auth'),

        // Storage
        STORAGE_TYPE: Joi.string()
          .valid('local', 's3')
          .default('local'),
        STORAGE_PATH: Joi.string().default('./uploads'),
        S3_BUCKET: Joi.string().optional(),
        S3_REGION: Joi.string().optional(),
        S3_ACCESS_KEY: Joi.string().optional(),
        S3_SECRET_KEY: Joi.string().optional(),

        // Billing
        STRIPE_SECRET_KEY: Joi.string().optional(),
        STRIPE_WEBHOOK_SECRET: Joi.string().optional(),
        USDC_MINT: Joi.string().optional(),

        // Monitoring
        PROMETHEUS_ENABLED: Joi.boolean().default(true),
        DATADOG_ENABLED: Joi.boolean().default(false),
        DATADOG_API_KEY: Joi.string().optional(),

        // Rate limiting
        RATE_LIMIT_WINDOW_MS: Joi.number().default(900000),
        RATE_LIMIT_MAX_REQUESTS: Joi.number().default(100),

        // Feature flags
        FEATURE_GPU_PROOFS: Joi.boolean().default(false),
        FEATURE_BATCH_VERIFICATION: Joi.boolean().default(true),
        FEATURE_BLOCKCHAIN_ANCHOR: Joi.boolean().default(true),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
    }),

    // ==================== LOGGING ====================

    LoggerModule,

    // ==================== DATABASE ====================

    DatabaseModule,

    // ==================== REDIS ====================

    RedisModule,

    // ==================== AUTHENTICATION ====================

    AuthModule,

    // ==================== HEALTH CHECKS ====================

    HealthModule,

    // ==================== FEATURE MODULES ====================

    DeviceModule,
    MediaModule,
    VerificationModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {
  constructor(private configService: ConfigService) {
    const nodeEnv = this.configService.get<string>('NODE_ENV');
    const port = this.configService.get<number>('PORT');
    
    console.log(`
      ╔═══════════════════════════════════════════════════════╗
      ║  TRUTH LAYER - NODE ZERO INITIALIZATION               ║
      ║                                                       ║
      ║  Environment: ${nodeEnv.toUpperCase().padEnd(31)} ║
      ║  Port: ${port.toString().padEnd(48)} ║
      ║  Database: ${this.configService.get('DATABASE_URL')?.substring(0, 35).padEnd(42)} ║
      ║  Redis: ${this.configService.get('REDIS_URL')?.substring(0, 38).padEnd(45)} ║
      ╚═══════════════════════════════════════════════════════╝
    `);
  }
}
