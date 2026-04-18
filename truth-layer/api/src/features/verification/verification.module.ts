/**
 * ==================== VERIFICATION MODULE ====================
 * ZK proof generation and verification workflows
 * Uses BullMQ for async proof processing
 */

import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { VerificationService } from './verification.service';
import { VerificationController } from './verification.controller';
import { PrismaService } from '../../database/prisma.service';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [
    DatabaseModule,
    BullModule.registerQueue({
      name: 'zk-proofs',
    }),
  ],
  controllers: [VerificationController],
  providers: [VerificationService, PrismaService],
  exports: [VerificationService],
})
export class VerificationModule {}

