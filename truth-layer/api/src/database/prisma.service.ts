/**
 * ==================== PRISMA SERVICE ====================
 * Singleton database connection manager for PostgreSQL
 * Handles connection pooling, middleware, and graceful shutdown
 */

import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { logger as winstonLogger } from '../common/logger/logger.config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger('PrismaService');

  async onModuleInit() {
    this.logger.log('[PRISMA] Connecting to PostgreSQL...');

    // Connect to database
    await this.$connect();

    this.logger.log('[PRISMA] ✅ Connected to PostgreSQL');

    // Add middleware for query logging (only in development)
    if (process.env.NODE_ENV === 'development') {
      this.$use(async (params, next) => {
        const before = Date.now();
        const result = await next(params);
        const after = Date.now();

        if (after - before > 1000) {
          this.logger.warn(
            `[PRISMA] Slow query detected: ${params.model}.${params.action} took ${after - before}ms`,
          );
        }

        return result;
      });
    }

    // Add middleware for error logging
    this.$use(async (params, next) => {
      try {
        return await next(params);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        winstonLogger.error('[PRISMA] Database error', {
          model: params.model,
          action: params.action,
          error: errorMessage,
        });
        throw error;
      }
    });
  }

  async onModuleDestroy() {
    this.logger.log('[PRISMA] Disconnecting from PostgreSQL...');
    await this.$disconnect();
    this.logger.log('[PRISMA] ✅ Disconnected from PostgreSQL');
  }

  /**
   * Health check for readiness probes
   */
  async healthCheck(): Promise<boolean> {
    try {
      await this.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      this.logger.error('[PRISMA] Health check failed', error);
      return false;
    }
  }
}
