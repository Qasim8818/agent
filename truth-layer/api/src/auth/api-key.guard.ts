/**
 * API Key Authentication Guard
 * Protects routes using X-API-Key header
 * 
 * Usage:
 *   @UseGuards(ApiKeyGuard)
 *   @Get('/protected')
 *   protectedRoute() { ... }
 */

import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private readonly validApiKeys: string[];

  constructor(private configService: ConfigService) {
    // Load API keys from environment (comma-separated)
    const apiKeysEnv = this.configService.get<string>('API_KEYS', '');
    this.validApiKeys = apiKeysEnv
      .split(',')
      .map(key => key.trim())
      .filter(key => key.length > 0);
    
    // Production safety: Fail fast if no API keys configured
    if (this.validApiKeys.length === 0) {
      throw new Error('FATAL: API_KEYS environment variable is empty or invalid. No valid API keys configured. Set API_KEYS="key1,key2" in environment.');
    }
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = this.extractApiKey(request);

    if (!apiKey || !this.validApiKeys.some(storedKey => crypto.timingSafeEqual(
      Buffer.from(apiKey, 'utf8'),
      Buffer.from(storedKey, 'utf8')
    ))) {
      throw new UnauthorizedException('Invalid or missing API key');
    }

    return true;
  }

  private extractApiKey(request: any): string | null {
    return request.headers['x-api-key'] || null;
  }
}
