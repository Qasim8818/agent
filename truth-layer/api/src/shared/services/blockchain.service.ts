import { Injectable, BadRequestException, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import * as crypto from 'crypto';

export interface AnchorProofDto {
  deviceId: string;
  verificationId: string;
  proofHash: string;
  chains: Array<'arweave' | 'solana'>;
}

export interface BlockchainAnchorDto {
  id: string;
  deviceId: string;
  verificationId: string;
  proofHash: string;
  arweaveTransactionId?: string;
  solanaTransactionSignature?: string;
  arweaveStatus: 'pending' | 'confirmed' | 'failed';
  solanaStatus: 'pending' | 'confirmed' | 'failed';
  anchoredAt: Date;
}

@Injectable()
export class BlockchainService {
  private readonly logger = new Logger(BlockchainService.name);
  private readonly arweaveNode = process.env.ARWEAVE_NODE || 'https://arweave.net';
  private readonly solanaRpc = process.env.SOLANA_RPC || 'https://api.devnet.solana.com';

  constructor(private prisma: PrismaService) {}

  /**
   * Anchor proof to blockchain(s)
   */
  async anchorProof(dto: AnchorProofDto): Promise<BlockchainAnchorDto> {
    const startTime = Date.now();

    try {
      // Verify device and verification exist
      const [device, verification] = await Promise.all([
        this.prisma.device.findUnique({ where: { device_id: dto.deviceId } }),
        this.prisma.zkProofJob.findUnique({ where: { proof_id: dto.verificationId } }),
      ]);

      if (!device) {
        throw new NotFoundException(`Device ${dto.deviceId} not found`);
      }

      if (!verification) {
        throw new NotFoundException(`Verification ${dto.verificationId} not found`);
      }

      if (verification.status !== 'completed') {
        throw new BadRequestException('Verification must be completed before anchoring');
      }

      if (!dto.chains || dto.chains.length === 0) {
        throw new BadRequestException('At least one chain must be specified');
      }

      // Create anchor record
      const anchorId = `anchor_${crypto.randomBytes(16).toString('hex')}`;

      const anchor = await this.prisma.blockchainAnchor.create({
        data: {
          anchor_id: anchorId,
          device_id: dto.deviceId,
          proof_id: dto.verificationId,
          proof_hash: dto.proofHash,
          arweave_status: dto.chains.includes('arweave') ? 'pending' : null,
          solana_status: dto.chains.includes('solana') ? 'pending' : null,
          anchored_at: new Date(),
        },
      });

      // Anchor to Arweave if requested
      if (dto.chains.includes('arweave')) {
        this.anchorToArweave(anchorId, dto).catch((error) => {
          this.logger.error(`Arweave anchoring failed: ${error.message}`);
        });
      }

      // Anchor to Solana if requested
      if (dto.chains.includes('solana')) {
        this.anchorToSolana(anchorId, dto).catch((error) => {
          this.logger.error(`Solana anchoring failed: ${error.message}`);
        });
      }

      const duration = Date.now() - startTime;
      this.logger.log(
        `Proof anchoring initiated: ${anchorId} to ${dto.chains.join(',')} in ${duration}ms`,
      );

      return this.mapAnchorToDto(anchor);
    } catch (error) {
      this.logger.error(`Proof anchoring failed: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get blockchain anchor status
   */
  async getAnchor(anchorId: string): Promise<BlockchainAnchorDto> {
    const anchor = await this.prisma.blockchainAnchor.findUnique({
      where: { anchor_id: anchorId },
    });

    if (!anchor) {
      throw new NotFoundException(`Anchor ${anchorId} not found`);
    }

    return this.mapAnchorToDto(anchor);
  }

  /**
   * Get device anchors
   */
  async getDeviceAnchors(
    deviceId: string,
    status?: string,
    limit: number = 50,
  ): Promise<BlockchainAnchorDto[]> {
    const device = await this.prisma.device.findUnique({
      where: { device_id: deviceId },
    });

    if (!device) {
      throw new NotFoundException(`Device ${deviceId} not found`);
    }

    const anchors = await this.prisma.blockchainAnchor.findMany({
      where: {
        device_id: deviceId,
      },
      orderBy: { anchored_at: 'desc' },
      take: limit,
    });

    return anchors.map((a) => this.mapAnchorToDto(a));
  }

  /**
   * Verify anchor on blockchain (stub implementation)
   */
  async verifyAnchor(anchorId: string, chain: 'arweave' | 'solana'): Promise<boolean> {
    const anchor = await this.getAnchor(anchorId);

    switch (chain) {
      case 'arweave':
        return await this.verifyArweaveAnchor(
          anchor.arweaveTransactionId,
          anchor.proofHash,
        );

      case 'solana':
        return await this.verifySolanaAnchor(
          anchor.solanaTransactionSignature,
          anchor.proofHash,
        );

      default:
        throw new BadRequestException(`Unknown chain: ${chain}`);
    }
  }

  /**
   * Anchor to Arweave (async background task)
   */
  private async anchorToArweave(
    anchorId: string,
    dto: AnchorProofDto,
  ): Promise<void> {
    try {
      this.logger.log(`Anchoring to Arweave: ${anchorId}`);

      // TODO: Implement Arweave integration
      // 1. Create transaction with proof data
      // 2. Sign with device key
      // 3. Submit to Arweave
      // 4. Monitor for confirmation

      // Stub: Simulate Arweave upload (30-60s)
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // Mock transaction ID
      const transactionId = `arweave_${crypto.randomBytes(32).toString('hex')}`;

      // Update anchor with transaction ID
      await this.prisma.blockchainAnchor.update({
        where: { anchor_id: anchorId },
        data: {
          arweave_tx_id: transactionId,
          arweave_status: 'confirmed', // In production: poll until confirmed
        },
      });

      this.logger.log(
        `Arweave anchor confirmed: ${transactionId}`,
      );
    } catch (error) {
      this.logger.error(`Arweave anchoring error: ${error.message}`);

      // Mark as failed
      await this.prisma.blockchainAnchor.update({
        where: { anchor_id: anchorId },
        data: { arweave_status: 'failed' },
      });
    }
  }

  /**
   * Anchor to Solana (async background task)
   */
  private async anchorToSolana(
    anchorId: string,
    dto: AnchorProofDto,
  ): Promise<void> {
    try {
      this.logger.log(`Anchoring to Solana: ${anchorId}`);

      // TODO: Implement Solana integration
      // 1. Create instruction with proof data
      // 2. Build transaction
      // 3. Sign with device key
      // 4. Send to Solana
      // 5. Confirm transaction

      // Stub: Simulate Solana submission (5-15s)
      await new Promise((resolve) => setTimeout(resolve, 8000));

      // Mock transaction signature
      const signature = `solana_${crypto.randomBytes(64).toString('hex')}`;

      // Update anchor with transaction signature
      await this.prisma.blockchainAnchor.update({
        where: { anchor_id: anchorId },
        data: {
          solana_tx_sig: signature,
          solana_status: 'confirmed', // In production: poll until confirmed
        },
      });

      this.logger.log(
        `Solana anchor confirmed: ${signature.substring(0, 20)}...`,
      );
    } catch (error) {
      this.logger.error(`Solana anchoring error: ${error.message}`);

      // Mark as failed
      await this.prisma.blockchainAnchor.update({
        where: { anchor_id: anchorId },
        data: { solana_status: 'failed' },
      });
    }
  }

  /**
   * Verify Arweave anchor (stub)
   */
  private async verifyArweaveAnchor(
    transactionId: string,
    proofHash: string,
  ): Promise<boolean> {
    if (!transactionId) {
      return false;
    }

    // TODO: Call Arweave API to verify transaction
    // arweave.transactions.get(transactionId)
    // Verify proof hash matches data in transaction

    // Stub: Assume verified if transaction ID exists
    return true;
  }

  /**
   * Verify Solana anchor (stub)
   */
  private async verifySolanaAnchor(
    signature: string,
    proofHash: string,
  ): Promise<boolean> {
    if (!signature) {
      return false;
    }

    // TODO: Call Solana RPC to verify transaction
    // getTransaction(signature) from RPC
    // Verify proof hash in transaction data

    // Stub: Assume verified if signature exists
    return true;
  }

  /**
   * Get blockchain statistics
   */
  async getBlockchainStats(deviceId: string) {
    const device = await this.prisma.device.findUnique({
      where: { device_id: deviceId },
    });

    if (!device) {
      throw new NotFoundException(`Device ${deviceId} not found`);
    }

    const [totalAnchors, arweaveConfirmed, solanaConfirmed, arweaveFailed, solanaFailed] =
      await Promise.all([
        this.prisma.blockchainAnchor.count({
          where: { device_id: deviceId },
        }),
        this.prisma.blockchainAnchor.count({
          where: { device_id: deviceId, arweave_status: 'confirmed' },
        }),
        this.prisma.blockchainAnchor.count({
          where: { device_id: deviceId, solana_status: 'confirmed' },
        }),
        this.prisma.blockchainAnchor.count({
          where: { device_id: deviceId, arweave_status: 'failed' },
        }),
        this.prisma.blockchainAnchor.count({
          where: { device_id: deviceId, solana_status: 'failed' },
        }),
      ]);

    return {
      totalAnchors,
      arweave: {
        confirmed: arweaveConfirmed,
        failed: arweaveFailed,
        successRate:
          totalAnchors > 0
            ? ((arweaveConfirmed / totalAnchors) * 100).toFixed(2)
            : 0,
      },
      solana: {
        confirmed: solanaConfirmed,
        failed: solanaFailed,
        successRate:
          totalAnchors > 0
            ? ((solanaConfirmed / totalAnchors) * 100).toFixed(2)
            : 0,
      },
    };
  }

  private mapAnchorToDto(anchor: any): BlockchainAnchorDto {
    return {
      id: anchor.anchor_id,
      deviceId: anchor.device_id,
      verificationId: anchor.proof_id,
      proofHash: anchor.proof_hash,
      arweaveTransactionId: anchor.arweave_tx_id,
      solanaTransactionSignature: anchor.solana_tx_sig,
      arweaveStatus: anchor.arweave_status || 'pending',
      solanaStatus: anchor.solana_status || 'pending',
      anchoredAt: anchor.anchored_at,
    };
  }
}
