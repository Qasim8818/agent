import {
  Controller,
  Post,
  Get,
  Delete,
  UseInterceptors,
  UploadedFile,
  Param,
  Body,
  Headers,
  BadRequestException,
  HttpCode,
  Logger,
  Res,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  private readonly logger = new Logger(MediaController.name);

  constructor(private readonly mediaService: MediaService) {}

  /**
   * POST /api/v1/media/upload
   * Upload a media file with TPM signature verification
   */
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { limits: { fileSize: 100 * 1024 * 1024 } }))
  @HttpCode(201)
  async uploadMedia(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { deviceId: string; mediaType: string; signature: string },
    @Headers('x-device-id') deviceIdHeader?: string,
  ) {
    if (!file) {
      throw new BadRequestException('File is required');
    }

    const deviceId = body.deviceId || deviceIdHeader;
    if (!deviceId) {
      throw new BadRequestException('deviceId is required');
    }

    if (!body.mediaType) {
      throw new BadRequestException('mediaType is required');
    }

    if (!body.signature) {
      throw new BadRequestException('signature is required');
    }

    const media = await this.mediaService.uploadMedia({
      deviceId,
      file,
      mediaType: body.mediaType as any,
      signature: body.signature,
    });

    return {
      data: media,
      message: 'Media uploaded successfully',
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GET /api/v1/media/:id
   * Retrieve media metadata
   */
  @Get(':id')
  async getMedia(
    @Param('id') mediaId: string,
    @Query('deviceId') deviceId?: string,
  ) {
    const media = await this.mediaService.getMedia(mediaId, deviceId);

    return {
      data: media,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GET /api/v1/media/:id/download
   * Download media file
   */
  @Get(':id/download')
  async downloadMedia(@Param('id') mediaId: string, @Res() res: Response) {
    const buffer = await this.mediaService.downloadMedia(mediaId);
    const media = await this.mediaService.getMedia(mediaId);

    res.setHeader('Content-Disposition', `attachment; filename="${media.fileName}"`);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.send(buffer);
  }

  /**
   * GET /api/v1/media/device/:deviceId
   * List all media for a device
   */
  @Get('device/:deviceId')
  async getDeviceMedia(
    @Param('deviceId') deviceId: string,
    @Query('mediaType') mediaType?: string,
    @Query('limit') limit: string = '50',
  ) {
    const mediaList = await this.mediaService.getDeviceMedia(
      deviceId,
      mediaType,
      Math.min(parseInt(limit) || 50, 1000),
    );

    return {
      data: mediaList,
      count: mediaList.length,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GET /api/v1/media/:id/hash
   * Get file hash (for verification)
   */
  @Get(':id/hash')
  async getMediaHash(@Param('id') mediaId: string) {
    const hash = await this.mediaService.getMediaHash(mediaId);

    return {
      data: {
        mediaId,
        hash,
      },
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * DELETE /api/v1/media/:id
   * Delete a media file
   */
  @Delete(':id')
  @HttpCode(204)
  async deleteMedia(
    @Param('id') mediaId: string,
    @Headers('x-device-id') deviceId?: string,
    @Body() body?: { deviceId: string },
  ) {
    const actualDeviceId = deviceId || body?.deviceId;
    if (!actualDeviceId) {
      throw new BadRequestException('deviceId is required');
    }

    await this.mediaService.deleteMedia(mediaId, actualDeviceId);

    return {
      message: 'Media deleted successfully',
      timestamp: new Date().toISOString(),
    };
  }
}
