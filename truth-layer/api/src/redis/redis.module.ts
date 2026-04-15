/**
 * ==================== REDIS MODULE ====================
 * Provides Redis connectivity for caching and session management
 */

import { Module, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as redis from 'redis';

@Injectable()
export class RedisService {
  private client: redis.RedisClient;
  private readonly logger = new Logger('RedisService');

  constructor(private configService: ConfigService) {
    this.client = redis.createClient({
      url: this.configService.get<string>('REDIS_URL') || 'redis://localhost:6379',
    });

    this.client.on('error', (err) => {
      this.logger.error('[REDIS] Connection error', err);
    });

    this.client.on('connect', () => {
      this.logger.log('[REDIS] Connected');
    });
  }

  async ping(): Promise<string> {
    return this.client.ping();
  }

  async closeConnection(): Promise<void> {
    return new Promise((resolve) => {
      this.client.quit(() => {
        this.logger.log('[REDIS] Disconnected');
        resolve();
      });
    });
  }
}

@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
