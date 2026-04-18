import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Logger } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as crypto from 'crypto';

export interface UploadMediaDto {
  deviceId: string;
  file: Express.Multer.File;
  mediaType: 'verification_document' | 'proof_artifact' | 'device_image';
  signature: string;
}

export interface MediaDto {
  id: string;
  deviceId: string;
  mediaType: string;
  fileName: string;
  fileHash: string;
  ipfsHash?: string;
  fileSize: number;
  uploadedAt: Date;
  signatureVerified: boolean;
}

@Injectable()
export class MediaService {
  private readonly logger = new Logger(MediaService.name);
  private readonly uploadDir = process.env.STORAGE_PATH || './uploads';
  private readonly storageType = process.env.STORAGE_TYPE || 'local';

  constructor(private prisma: PrismaService) {
    this.initializeStorage();
  }

  private async initializeStorage() {
    if (this.storageType === 'local') {
      try {
        await fs.mkdir(this.uploadDir, { recursive: true });
        this.logger.log(`Storage initialized at ${this.uploadDir}`);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        this.logger.error(`Failed to initialize storage: ${errorMessage}`);
      }
    }
  }

  async uploadMedia(dto: UploadMediaDto): Promise<MediaDto> {
    const startTime = Date.now();

    try {
      // Verify device exists
      const device = await this.prisma.device.findUnique({
        where: { device_id: dto.deviceId },
      });

      if (!device) {
        throw new NotFoundException(`Device ${dto.deviceId} not found`);
      }

      // Validate file
      if (!dto.file || dto.file.size === 0) {
        throw new BadRequestException('File is required and must not be empty');
      }

      if (dto.file.size > 100 * 1024 * 1024) {
        // 100MB limit
        throw new BadRequestException('File size exceeds 100MB limit');
      }

      // Calculate file hash
      const fileHash = crypto
        .createHash('sha256')
        .update(dto.file.buffer)
        .digest('hex');

      // Verify signature
      const signatureValid = this.verifyFileSignature(
        fileHash,
        dto.signature,
        device.tpm_public_key,
      );

      if (!signatureValid) {
        this.logger.warn(
          `Invalid signature for media upload from device ${dto.deviceId}`,
        );
        throw new BadRequestException('File signature verification failed');
      }

      // Check for duplicate media
      const existingMedia = await this.prisma.mediaFile.findFirst({
        where: {
          device_id: dto.deviceId,
          file_hash: fileHash,
        },
      });

      if (existingMedia) {
        this.logger.log(`Duplicate media detected (hash: ${fileHash})`);
        throw new BadRequestException('Duplicate file detected');
      }

      // Store file
      const mediaId = `media_${crypto.randomBytes(16).toString('hex')}`;
      const storagePath = path.join(this.uploadDir, mediaId);

      let ipfsHash: string | null = null;

      if (this.storageType === 'local') {
        await fs.writeFile(storagePath, dto.file.buffer);
      } else if (this.storageType === 'ipfs') {
        // TODO: Implement IPFS upload
        ipfsHash = await this.uploadToIPFS(dto.file.buffer, mediaId);
      }

      // Create media record in database
      const mediaFile = await this.prisma.mediaFile.create({
        data: {
          media_id: mediaId,
          device_id: dto.deviceId,
          media_type: dto.mediaType,
          file_name: dto.file.originalname,
          file_hash: fileHash,
          ipfs_hash: ipfsHash,
          file_size: dto.file.size,
          storage_path: this.storageType === 'local' ? storagePath : null,
          signature_verified: true,
          uploaded_at: new Date(),
        },
      });

      const duration = Date.now() - startTime;
      this.logger.log(
        `Media uploaded: ${mediaId} (${(dto.file.size / 1024 / 1024).toFixed(2)}MB) in ${duration}ms`,
      );

      return this.mapMediaToDto(mediaFile);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      this.logger.error(`Media upload failed: ${errorMessage}`);
      throw error;
    }
  }

  async getMedia(mediaId: string, deviceId?: string): Promise<MediaDto> {
    const media = await this.prisma.mediaFile.findUnique({
      where: { media_id: mediaId },
    });

    if (!media) {
      throw new NotFoundException(`Media ${mediaId} not found`);
    }

    // Optionally verify device ownership
    if (deviceId && media.device_id !== deviceId) {
      throw new BadRequestException(
        'Media does not belong to this device',
      );
    }

    return this.mapMediaToDto(media);
  }

  async getDeviceMedia(
    deviceId: string,
    mediaType?: string,
    limit: number = 50,
  ): Promise<MediaDto[]> {
    const device = await this.prisma.device.findUnique({
      where: { device_id: deviceId },
    });

    if (!device) {
      throw new NotFoundException(`Device ${deviceId} not found`);
    }

    const mediaFiles = await this.prisma.mediaFile.findMany({
      where: {
        device_id: deviceId,
        ...(mediaType && { media_type: mediaType }),
      },
      orderBy: { uploaded_at: 'desc' },
      take: limit,
    });

    return mediaFiles.map((m) => this.mapMediaToDto(m));
  }

  async downloadMedia(mediaId: string): Promise<Buffer> {
    const media = await this.prisma.mediaFile.findUnique({
      where: { media_id: mediaId },
    });

    if (!media) {
      throw new NotFoundException(`Media ${mediaId} not found`);
    }

    if (media.storage_path) {
      try {
        return await fs.readFile(media.storage_path);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        this.logger.error(`Failed to read media file: ${errorMessage}`);
        throw new NotFoundException('Media file not found on disk');
      }
    } else if (media.ipfs_hash) {
      // TODO: Implement IPFS download
      throw new BadRequestException(
        'IPFS download not yet implemented',
      );
    }

    throw new NotFoundException('Media storage location unknown');
  }

  async deleteMedia(mediaId: string, deviceId: string): Promise<void> {
    const media = await this.prisma.mediaFile.findUnique({
      where: { media_id: mediaId },
    });

    if (!media) {
      throw new NotFoundException(`Media ${mediaId} not found`);
    }

    if (media.device_id !== deviceId) {
      throw new BadRequestException(
        'Cannot delete media from another device',
      );
    }

    // Delete from storage
    if (media.storage_path) {
      try {
        await fs.unlink(media.storage_path);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        this.logger.warn(`Failed to delete storage file: ${errorMessage}`);
      }
    }

    // Delete from database
    await this.prisma.mediaFile.delete({
      where: { media_id: mediaId },
    });

    this.logger.log(`Media deleted: ${mediaId}`);
  }

  async getMediaHash(mediaId: string): Promise<string> {
    const media = await this.prisma.mediaFile.findUnique({
      where: { media_id: mediaId },
    });

    if (!media) {
      throw new NotFoundException(`Media ${mediaId} not found`);
    }

    return media.file_hash;
  }

  private verifyFileSignature(
    fileHash: string,
    signature: string,
    publicKey: string,
  ): boolean {
    // TODO: Implement proper TPM signature verification
    // For MVP: Accept if signature is provided
    if (!signature || signature.length < 32) {
      return false;
    }

    // In production: Use crypto.verify() with RSA/ECDSA public key
    // Stub: Always return true if signature provided
    return true;
  }

  private async uploadToIPFS(buffer: Buffer, mediaId: string): Promise<string> {
    // TODO: Implement IPFS upload via Pinata or local node
    // Stub: Generate mock IPFS hash
    const hash = crypto.createHash('sha256').update(buffer).digest('hex');
    return `Qm${hash.substring(0, 44)}`;
  }

  private mapMediaToDto(media: any): MediaDto {
    return {
      id: media.media_id,
      deviceId: media.device_id,
      mediaType: media.media_type,
      fileName: media.file_name,
      fileHash: media.file_hash,
      ipfsHash: media.ipfs_hash,
      fileSize: media.file_size,
      uploadedAt: media.uploaded_at,
      signatureVerified: media.signature_verified,
    };
  }
}
