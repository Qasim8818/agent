/**
 * ==================== DEVICE REGISTRATION CONTROLLER ====================
 * Handles device registration, verification, and management
 * 
 * Endpoints:
 *   POST   /devices/register          Register new device (returns Device ID + attestation)
 *   GET    /devices/:id               Get device info with verification history
 *   GET    /devices/:id/pubkey        Get device public key for verification
 *   POST   /devices/:id/revoke        Revoke device (security incident)
 *   GET    /devices/:id/stats         Get verification statistics for device
 */

import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Query,
  Headers,
  Logger,
  BadRequestException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { DeviceResponseDto } from './dto/device-response.dto';
import { logger as winstonLogger } from '../../common/logger/logger.config';

@ApiTags('Devices')
@Controller('devices')
export class DeviceController {
  private readonly logger = new Logger('DeviceController');

  constructor(private deviceService: DeviceService) {}

  /**
   * ==================== REGISTER DEVICE ====================
   * Create a new verified device in the network
   */
  @Post('register')
  @ApiOperation({
    summary: 'Register a new device with TPM attestation',
    description: `
      Registers a new device in the Truth Layer network.
      Requires valid TPM 2.0 attestation certificate.
      
      Returns device ID, API key, and attestation proof.
      
      Security: Rate-limited to 10 devices/hour per IP
    `,
  })
  @ApiResponse({
    status: 201,
    description: 'Device successfully registered',
    type: DeviceResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid TPM attestation or request payload',
  })
  @ApiResponse({
    status: 409,
    description: 'TPM already registered (device limit per TPM: 1)',
  })
  async register(
    @Body() createDeviceDto: CreateDeviceDto,
    @Headers('x-client-ip') clientIp: string,
    @Headers('x-forwarded-for') forwardedIp: string,
    @Headers('user-agent') userAgent: string,
  ): Promise<DeviceResponseDto> {
    const ip = clientIp || forwardedIp || 'unknown';
    return this.deviceService.register(createDeviceDto, ip, userAgent);
  }

  /**
   * ==================== GET DEVICE ====================
   * Retrieve device information and verification history
   */
  @Get(':id')
  @ApiOperation({
    summary: 'Get device information',
    description: 'Returns device details, TPM info, and recent verification history',
  })
  @ApiParam({ name: 'id', description: 'Device ID (UUID)' })
  @ApiQuery({
    name: 'include_history',
    required: false,
    type: Boolean,
    description: 'Include verification history (default: false)',
  })
  @ApiResponse({
    status: 200,
    description: 'Device information retrieved',
  })
  @ApiResponse({
    status: 404,
    description: 'Device not found',
  })
  async getDevice(
    @Param('id') deviceId: string,
    @Query('include_history') includeHistory: boolean = false,
  ): Promise<any> {
    return this.deviceService.getDevice(deviceId, includeHistory);
  }

  /**
   * ==================== GET DEVICE PUBLIC KEY ====================
   * Returns device's TPM public key for client-side signature verification
   */
  @Get(':id/pubkey')
  @ApiOperation({
    summary: 'Get device TPM public key',
    description: 'Returns the public key for verifying media signatures from this device',
  })
  async getPublicKey(@Param('id') deviceId: string): Promise<any> {
    return this.deviceService.getPublicKey(deviceId);
  }

  /**
   * ==================== GET DEVICE STATS ====================
   * Returns device verification statistics
   */
  @Get(':id/stats')
  @ApiOperation({
    summary: 'Get device verification statistics',
    description: 'Returns verification count, rate, and activity timeline',
  })
  async getDeviceStats(@Param('id') deviceId: string): Promise<any> {
    return this.deviceService.getDeviceStats(deviceId);
  }
}
