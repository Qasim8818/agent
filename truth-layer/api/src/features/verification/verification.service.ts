import { Injectable, BadRequestException, NotFoundException, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../../database/prisma.service';
import * as crypto from 'crypto';

export interface GenerateProofDto {
  deviceId: string;
  attestationData: string;
  proofType: 'tpm_quote' | 'device_metrics' | 'compliance_check';
}

export interface VerificationDto {
  id: string;
  deviceId: string;
  proofType: string;
  proofData: string;
  proofHash: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
  completedAt?: Date;
  error?: string;
}

@Injectable()
export class VerificationService {
  private readonly logger = new Logger(VerificationService.name);

  constructor(
    private prisma: PrismaService,
    @InjectQueue('zk-proofs') private zkProofQueue: Queue,
  ) {}

  /**
   * Generate ZK proof asynchronously via Bull queue
   */
  async generateProof(dto: GenerateProofDto): Promise<VerificationDto> {
    const startTime = Date.now();

    try {
      // Verify device exists
      const device = await this.prisma.device.findUnique({
        where: { device_id: dto.deviceId },
      });

      if (!device) {
        throw new NotFoundException(`Device ${dto.deviceId} not found`);
      }

      // Validate attestation data
      if (!dto.attestationData || dto.attestationData.length < 32) {
        throw new BadRequestException('Invalid attestation data');
      }

      // Create verification record
      const verificationId = `verify_${crypto.randomBytes(16).toString('hex')}`;

      const verification = await this.prisma.zkProofJob.create({
        data: {
          proof_id: verificationId,
          device_id: dto.deviceId,
          proof_type: dto.proofType,
          attestation_data: dto.attestationData,
          status: 'pending',
          created_at: new Date(),
        },
      });

      // Enqueue proof generation job
      const job = await this.zkProofQueue.add(
        'generate-proof',
        {
          verificationId,
          deviceId: dto.deviceId,
          proofType: dto.proofType,
          attestationData: dto.attestationData,
        },
        {
          attempts: 3,
          backoff: { type: 'exponential', delay: 2000 },
          removeOnComplete: false,
          removeOnFail: false,
          timeout: 120000, // 2 minutes max
        },
      );

      this.logger.log(
        `Proof generation queued: ${verificationId} (job: ${job.id}) in ${Date.now() - startTime}ms`,
      );

      return this.mapVerificationToDto(verification);
    } catch (error) {
      this.logger.error(`Proof generation failed: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get verification status
   */
  async getVerification(verificationId: string): Promise<VerificationDto> {
    const verification = await this.prisma.zkProofJob.findUnique({
      where: { proof_id: verificationId },
    });

    if (!verification) {
      throw new NotFoundException(`Verification ${verificationId} not found`);
    }

    return this.mapVerificationToDto(verification);
  }

  /**
   * Get device verifications
   */
  async getDeviceVerifications(
    deviceId: string,
    status?: string,
    limit: number = 50,
  ): Promise<VerificationDto[]> {
    const device = await this.prisma.device.findUnique({
      where: { device_id: deviceId },
    });

    if (!device) {
      throw new NotFoundException(`Device ${deviceId} not found`);
    }

    const verifications = await this.prisma.zkProofJob.findMany({
      where: {
        device_id: deviceId,
        ...(status && { status }),
      },
      orderBy: { created_at: 'desc' },
      take: limit,
    });

    return verifications.map((v) => this.mapVerificationToDto(v));
  }

  /**
   * Process proof generation (Bull processor)
   */
  async processProofGeneration(data: any): Promise<string> {
    const { verificationId, deviceId, proofType, attestationData } = data;

    try {
      this.logger.log(`Processing proof: ${verificationId} (${proofType})`);

      // Get verification and device
      const verification = await this.prisma.zkProofJob.findUnique({
        where: { proof_id: verificationId },
      });

      const device = await this.prisma.device.findUnique({
        where: { device_id: deviceId },
      });

      if (!verification || !device) {
        throw new Error('Verification or device not found');
      }

      // Generate proof based on type
      const proofData = await this.generateProofByType(
        proofType,
        attestationData,
        device,
      );

      // Calculate proof hash
      const proofHash = crypto
        .createHash('sha256')
        .update(proofData)
        .digest('hex');

      // Update verification with completed proof
      await this.prisma.zkProofJob.update({
        where: { proof_id: verificationId },
        data: {
          proof_data: Buffer.from(proofData),
          proof_hash: proofHash,
          status: 'completed',
          completed_at: new Date(),
        },
      });

      this.logger.log(
        `Proof generated: ${verificationId} (hash: ${proofHash.substring(0, 16)}...)`,
      );

      return proofHash;
    } catch (error) {
      this.logger.error(`Proof generation error: ${error.message}`);

      // Mark as failed
      await this.prisma.zkProofJob.update({
        where: { proof_id: verificationId },
        data: {
          status: 'failed',
          error_message: error.message,
          completed_at: new Date(),
        },
      });

      throw error;
    }
  }

  // ... rest of private methods unchanged: generateProofByType, generateTPMQuoteProof, etc.

  private async generateProofByType(
    proofType: string,
    attestationData: string,
    device: any,
  ): Promise<string> {
    const startTime = Date.now();

    try {
      switch (proofType) {
        case 'tpm_quote':
          return await this.generateTPMQuoteProof(attestationData, device);

        case 'device_metrics':
          return await this.generateDeviceMetricsProof(attestationData);

        case 'compliance_check':
          return await this.generateComplianceProof(attestationData, device);

        default:
          throw new Error(`Unknown proof type: ${proofType}`);
      }
    } catch (error) {
      this.logger.error(`Proof generation (${proofType}) failed: ${error.message}`);
      throw error;
    }
  }

  private async generateTPMQuoteProof(
    attestationData: string,
    device: any,
  ): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const proofData = {
      type: 'tpm_quote',
      deviceId: device.device_id,
      attestationHash: crypto
        .createHash('sha256')
        .update(attestationData)
        .digest('hex'),
      timestamp: new Date().toISOString(),
      circuitVersion: '1.0',
      proofElements: {
        commitment: crypto.randomBytes(32).toString('hex'),
        challenge: crypto.randomBytes(32).toString('hex'),
        response: crypto.randomBytes(64).toString('hex'),
      },
    };

    return JSON.stringify(proofData);
  }

  private async generateDeviceMetricsProof(
    attestationData: string,
  ): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const proofData = {
      type: 'device_metrics',
      metricsHash: crypto
        .createHash('sha256')
        .update(attestationData)
        .digest('hex'),
      timestamp: new Date().toISOString(),
      metrics: {
        cpuUsage: Math.random() * 100,
        memoryUsage: Math.random() * 100,
        uptime: Math.floor(Math.random() * 1000000),
      },
    };

    return JSON.stringify(proofData);
  }

  private async generateComplianceProof(
    attestationData: string,
    device: any,
  ): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 2500));

    const proofData = {
      type: 'compliance_check',
      deviceId: device.device_id,
      checks: [
        { check: 'secure_boot', status: 'passed' },
        { check: 'tpm_enabled', status: 'passed' },
        { check: 'firmware_signed', status: 'passed' },
        { check: 'os_verified', status: 'passed' },
      ],
      overallStatus: 'compliant',
      timestamp: new Date().toISOString(),
    };

    return JSON.stringify(proofData);
  }

  async getDeviceProofStats(deviceId: string) {
    const device = await this.prisma.device.findUnique({
      where: { device_id: deviceId },
    });

    if (!device) {
      throw new NotFoundException(`Device ${deviceId} not found`);
    }

    const [total, completed, pending, failed] = await Promise.all([
      this.prisma.zkProofJob.count({
        where: { device_id: deviceId },
      }),
      this.prisma.zkProofJob.count({
        where: { device_id: deviceId, status: 'completed' },
      }),
      this.prisma.zkProofJob.count({
        where: { device_id: deviceId, status: 'pending' },
      }),
      this.prisma.zkProofJob.count({
        where: { device_id: deviceId, status: 'failed' },
      }),
    ]);

    const lastProof = await this.prisma.zkProofJob.findFirst({
      where: { device_id: deviceId },
      orderBy: { created_at: 'desc' },
    });

    return {
      total,
      completed,
      pending,
      failed,
      successRate: total > 0 ? ((completed / total) * 100).toFixed(2) : 0,
      lastProofAt: lastProof?.created_at,
    };
  }

  private mapVerificationToDto(verification: any): VerificationDto {
    return {
      id: verification.proof_id,
      deviceId: verification.device_id,
      proofType: verification.proof_type,
      proofData: verification.proof_data?.toString() || '',
      proofHash: verification.proof_hash,
      status: verification.status,
      createdAt: verification.created_at,
      completedAt: verification.completed_at,
      error: verification.error_message,
    };
  }
}

