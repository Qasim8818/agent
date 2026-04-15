/**
 * ==================== DATABASE MODULE ====================
 * Provides database connectivity via Prisma ORM
 * Exports PrismaService for use in other modules
 */

import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
