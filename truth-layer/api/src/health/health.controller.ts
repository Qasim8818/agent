/**
 * ==================== HEALTH CHECK CONTROLLER ====================
 * Readiness and liveness checks for Kubernetes/Docker
 */

import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PrismaService } from '../../database/prisma.service';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @ApiOperation({
    summary: 'Liveness check',
    description: 'Indicates if the service is running',
  })
  @ApiResponse({ status: 200, description: 'Service is alive' })
  async health() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
    };
  }

  @Get('ready')
  @ApiOperation({
    summary: 'Readiness check',
    description: 'Indicates if the service is ready to accept traffic',
  })
  @ApiResponse({ status: 200, description: 'Service is ready' })
  @ApiResponse({ status: 503, description: 'Service is not ready' })
  async ready() {
    const isDbHealthy = await this.prisma.healthCheck();

    if (!isDbHealthy) {
      return {
        status: 'not_ready',
        reason: 'Database connection failed',
        timestamp: new Date().toISOString(),
      };
    }

    return {
      status: 'ready',
      timestamp: new Date().toISOString(),
      database: 'connected',
    };
  }
}
