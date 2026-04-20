/**
 * ==================== SHARED MODULE ====================
 * Central module exporting shared services used across features
 * Services: BlockchainService, and other shared services
 */

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BlockchainService } from './services/blockchain.service';

@Module({
  imports: [DatabaseModule],
  providers: [BlockchainService],
  exports: [BlockchainService, DatabaseModule],
})
export class SharedModule {}
