/**
 * ==================== GLOBAL EXCEPTION FILTER ====================
 * Catches all exceptions and formats them consistently
 * Logs errors to Winston and sends standardized responses
 */

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { logger as winstonLogger } from '../logger/logger.config';

interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
  timestamp: string;
  path: string;
  requestId?: string;
  details?: any;
}

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const requestId = request.id || request.headers['x-request-id'] || 'unknown';
    const path = request.url;
    const method = request.method;

    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let errorMessage = 'Internal Server Error';
    let errorName = 'INTERNAL_SERVER_ERROR';
    let details: any = undefined;

    // Handle HTTP exceptions
    if (exception instanceof Error) {
      errorMessage = exception.message;

      // Check if it's a Nest HTTP exception
      if ('getStatus' in exception) {
        statusCode = (exception as any).getStatus();
        if ('getResponse' in exception) {
          const response = (exception as any).getResponse();
          if (typeof response === 'object') {
            errorName = response['error'] || response['message'] || errorName;
            details = response['details'] || undefined;
          }
        }
      }

      // Prisma errors
      if (exception['code'] === 'P2025') {
        statusCode = HttpStatus.NOT_FOUND;
        errorName = 'NOT_FOUND';
        errorMessage = 'Resource not found';
      } else if (exception['code'] === 'P2002') {
        statusCode = HttpStatus.CONFLICT;
        errorName = 'UNIQUE_CONSTRAINT_VIOLATION';
        errorMessage = `Unique constraint failed on field(s): ${exception['meta']?.target?.join(', ')}`;
      } else if (exception['code']?.startsWith('P')) {
        statusCode = HttpStatus.BAD_REQUEST;
        errorName = 'INVALID_REQUEST';
        errorMessage = 'Invalid request data';
        details = { prismaCode: exception['code'] };
      }
    }

    const errorResponse: ErrorResponse = {
      error: errorName,
      message: errorMessage,
      statusCode,
      timestamp: new Date().toISOString(),
      path,
      requestId,
      ...(details && { details }),
    };

    // Log the error
    const logLevel = statusCode >= 500 ? 'error' : 'warn';
    winstonLogger[logLevel](`[${method} ${path}] Exception caught`, {
      requestId,
      statusCode,
      error: errorName,
      message: errorMessage,
      details: details,
      stack: exception instanceof Error ? exception.stack : undefined,
    });

    // Send response
    httpAdapter.reply(response, errorResponse, statusCode);
  }
}
