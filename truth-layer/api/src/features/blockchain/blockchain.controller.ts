import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Query,
  HttpCode,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { BlockchainService } from '../../shared/services/blockchain.service';

@Controller('api/v1/blockchain')
export class BlockchainController {
  private readonly logger = new Logger(BlockchainController.name);

  constructor(private readonly blockchainService: BlockchainService) {}

  /**
   * POST /api/v1/blockchain/anchor
   * Anchor proof to blockchain(s)
   */
  @Post('anchor')
  @HttpCode(202)
  async anchorProof(
    @Body()
    body: {
      deviceId: string;
      verificationId: string;
      proofHash: string;
      chains: Array<'arweave' | 'solana'>;
    },
  ) {
    if (!body.deviceId) {
      throw new BadRequestException('deviceId is required');
    }

    if (!body.verificationId) {
      throw new BadRequestException('verificationId is required');
    }

    if (!body.proofHash) {
      throw new BadRequestException('proofHash is required');
    }

    if (!body.chains || body.chains.length === 0) {
      throw new BadRequestException('At least one chain must be specified');
    }

    const validChains = ['arweave', 'solana'];
    for (const chain of body.chains) {
      if (!validChains.includes(chain)) {
        throw new BadRequestException(
          `Invalid chain: ${chain}. Must be one of: ${validChains.join(', ')}`,
        );
      }
    }

    const anchor = await this.blockchainService.anchorProof({
      deviceId: body.deviceId,
      verificationId: body.verificationId,
      proofHash: body.proofHash,
      chains: body.chains as any,
    });

    return {
      data: anchor,
      message: 'Proof anchoring initiated',
      statusUrl: `/api/v1/blockchain/anchor/${anchor.id}`,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GET /api/v1/blockchain/anchor/:id
   * Get anchor status
   */
  @Get('anchor/:id')
  async getAnchor(@Param('id') anchorId: string) {
    const anchor = await this.blockchainService.getAnchor(anchorId);

    return {
      data: anchor,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GET /api/v1/blockchain/device/:deviceId
   * Get all anchors for a device
   */
  @Get('device/:deviceId')
  async getDeviceAnchors(
    @Param('deviceId') deviceId: string,
    @Query('status') status?: string,
    @Query('limit') limit: string = '50',
  ) {
    const anchors = await this.blockchainService.getDeviceAnchors(
      deviceId,
      status,
      Math.min(parseInt(limit) || 50, 1000),
    );

    return {
      data: anchors,
      count: anchors.length,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * POST /api/v1/blockchain/verify/:anchorId
   * Verify anchor on blockchain
   */
  @Post('verify/:anchorId')
  @HttpCode(200)
  async verifyAnchor(
    @Param('anchorId') anchorId: string,
    @Body() body: { chain: 'arweave' | 'solana' },
  ) {
    if (!body.chain) {
      throw new BadRequestException('chain is required');
    }

    const isValid = await this.blockchainService.verifyAnchor(anchorId, body.chain);

    return {
      data: {
        anchorId,
        chain: body.chain,
        verified: isValid,
      },
      message: isValid ? 'Anchor verified' : 'Anchor verification failed',
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GET /api/v1/blockchain/device/:deviceId/stats
   * Get blockchain statistics for device
   */
  @Get('device/:deviceId/stats')
  async getBlockchainStats(@Param('deviceId') deviceId: string) {
    const stats = await this.blockchainService.getBlockchainStats(deviceId);

    return {
      data: stats,
      timestamp: new Date().toISOString(),
    };
  }
}
