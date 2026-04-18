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
import { VerificationService } from './verification.service';

@Controller('verification')
export class VerificationController {
  private readonly logger = new Logger(VerificationController.name);

  constructor(private readonly verificationService: VerificationService) {}

  /**
   * POST /api/v1/verification/generate-proof
   * Generate ZK proof for device attestation
   */
  @Post('generate-proof')
  @HttpCode(202)
  async generateProof(
    @Body() body: { deviceId: string; attestationData: string; proofType: string },
  ) {
    if (!body.deviceId) {
      throw new BadRequestException('deviceId is required');
    }

    if (!body.attestationData) {
      throw new BadRequestException('attestationData is required');
    }

    if (!body.proofType) {
      throw new BadRequestException('proofType is required');
    }

    const validProofTypes = ['tpm_quote', 'device_metrics', 'compliance_check'];
    if (!validProofTypes.includes(body.proofType)) {
      throw new BadRequestException(
        `Invalid proofType. Must be one of: ${validProofTypes.join(', ')}`,
      );
    }

    const verification = await this.verificationService.generateProof({
      deviceId: body.deviceId,
      attestationData: body.attestationData,
      proofType: body.proofType as any,
    });

    return {
      data: verification,
      message: 'Proof generation queued',
      statusUrl: `/api/v1/verification/${verification.id}`,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GET /api/v1/verification/:id
   * Get verification/proof status
   */
  @Get(':id')
  async getVerification(@Param('id') verificationId: string) {
    const verification = await this.verificationService.getVerification(verificationId);

    return {
      data: verification,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GET /api/v1/verification/device/:deviceId
   * Get all verifications for a device
   */
  @Get('device/:deviceId')
  async getDeviceVerifications(
    @Param('deviceId') deviceId: string,
    @Query('status') status?: string,
    @Query('limit') limit: string = '50',
  ) {
    const verifications = await this.verificationService.getDeviceVerifications(
      deviceId,
      status,
      Math.min(parseInt(limit) || 50, 1000),
    );

    return {
      data: verifications,
      count: verifications.length,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GET /api/v1/verification/device/:deviceId/stats
   * Get proof generation statistics for device
   */
  @Get('device/:deviceId/stats')
  async getDeviceProofStats(@Param('deviceId') deviceId: string) {
    const stats = await this.verificationService.getDeviceProofStats(deviceId);

    return {
      data: stats,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * POST /api/v1/verification/batch-generate
   * Generate multiple proofs (rate limited)
   */
  @Post('batch-generate')
  @HttpCode(202)
  async batchGenerateProofs(
    @Body()
    body: {
      deviceId: string;
      proofs: Array<{ attestationData: string; proofType: string }>;
    },
  ) {
    if (!body.deviceId) {
      throw new BadRequestException('deviceId is required');
    }

    if (!body.proofs || body.proofs.length === 0) {
      throw new BadRequestException('proofs array is required and must not be empty');
    }

    if (body.proofs.length > 10) {
      throw new BadRequestException('Maximum 10 proofs per batch request');
    }

    const verifications = [];
    for (const proof of body.proofs) {
      try {
        const verification = await this.verificationService.generateProof({
          deviceId: body.deviceId,
          attestationData: proof.attestationData,
          proofType: proof.proofType as any,
        });
        verifications.push(verification);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        this.logger.warn(
          `Failed to generate proof in batch: ${errorMessage}`,
        );
      }
    }

    return {
      data: verifications,
      count: verifications.length,
      message: 'Batch proofs queued for generation',
      timestamp: new Date().toISOString(),
    };
  }
}
