/**
 * ==================== LOGGING INTERCEPTOR ====================
 * Logs all incoming requests and outgoing responses
 * Tracks request duration and adds request ID tracking
 */

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as crypto from 'crypto';
import { logger as winstonLogger } from '../logger/logger.config';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, ip, headers } = request;

    // Generate request ID if not provided
    const requestId =
      headers['x-request-id'] ||
      headers['x-correlation-id'] ||
      crypto.randomUUID();

    request.id = requestId;

    const startTime = Date.now();
    const userAgent = headers['user-agent'] || 'unknown';
    const clientIp = ip || headers['x-forwarded-for'] || 'unknown';

    // Log incoming request
    winstonLogger.info(`[${method}] ${url}`, {
      requestId,
      method,
      path: url,
      ip: clientIp,
      userAgent,
      timestamp: new Date().toISOString(),
    });

    return next.handle().pipe(
      tap((response) => {
        const duration = Date.now() - startTime;
        const statusCode = context.switchToHttp().getResponse().statusCode;

        // Warn if slow response
        if (duration > 1000) {
          winstonLogger.warn(`[${method}] ${url} completed slowly`, {
            requestId,
            method,
            path: url,
            statusCode,
            duration,
            ip: clientIp,
          });
        } else {
          winstonLogger.debug(`[${method}] ${url} completed`, {
            requestId,
            method,
            path: url,
            statusCode,
            duration,
          });
        }

        return response;
      }),
    );
  }
}
