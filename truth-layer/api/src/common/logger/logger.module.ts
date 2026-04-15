/**
 * ==================== LOGGER MODULE ====================
 * Provides Winston logging integration with NestJS
 */

import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { logger as winstonLogger } from './logger.config';

@Module({
  imports: [
    // Note: WinstonModule integration is optional
    // We're using our custom logger configuration
  ],
  providers: [
    {
      provide: 'WINSTON_LOGGER',
      useValue: winstonLogger,
    },
  ],
  exports: ['WINSTON_LOGGER'],
})
export class LoggerModule {}
