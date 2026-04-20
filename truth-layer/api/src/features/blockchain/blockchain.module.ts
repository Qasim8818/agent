/**
 * ==================== BLOCKCHAIN MODULE ====================
 * Feature module for blockchain anchoring and transaction management
 * Provides: BlockchainController, BlockchainService (via SharedModule)
 */

import { Module } from '@nestjs/common';
import { BlockchainController } from './blockchain.controller';
import { SharedModule } from '../../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [BlockchainController],
  exports: [SharedModule],
})
export class BlockchainModule {}
