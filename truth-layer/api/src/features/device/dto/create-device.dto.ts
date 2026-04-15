/**
 * ==================== CREATE DEVICE DTO ====================
 * Request payload for device registration
 * Includes validation for all TPM and device fields
 */

import { IsString, IsNotEmpty, IsOptional, Length, Matches, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum DeviceType {
  ANDROID = 'ANDROID',
  IOS = 'IOS',
  WEB = 'WEB',
  EMBEDDED = 'EMBEDDED',
}

export class CreateDeviceDto {
  @ApiProperty({
    description: 'Device name (max 100 chars)',
    example: 'Qasim Personal Phone',
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  device_name: string;

  @ApiProperty({
    description: 'Device type (ANDROID, IOS, WEB, EMBEDDED)',
    enum: DeviceType,
    example: 'ANDROID',
  })
  @IsNotEmpty()
  @IsEnum(DeviceType)
  device_type: DeviceType;

  @ApiProperty({
    description: 'TPM 2.0 Serial Number (extraction from SafetyNet/SecureEnclave)',
    example: 'TPM2.0_SERIAL_ABC123XYZ789',
    minLength: 20,
    maxLength: 256,
  })
  @IsNotEmpty()
  @IsString()
  @Length(20, 256)
  tpm_serial: string;

  @ApiProperty({
    description: 'Base64-encoded TPM attestation certificate',
    example: 'MIIDXTCCAkWgAwIBAgIJAOp...',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z0-9+/]*={0,2}$/, {
    message: 'tpm_attestation_cert must be valid base64',
  })
  tpm_attestation_cert: string;

  @ApiProperty({
    description: 'Operating System version',
    example: 'Android 14.0',
    maxLength: 50,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  os_version?: string;

  @ApiProperty({
    description: 'Application/SDK version',
    example: '1.0.5',
    maxLength: 50,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  app_version?: string;

  @ApiProperty({
    description: 'Versioning (alternative to app_version)',
    example: '1.0.5',
    maxLength: 50,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  version?: string;

  @ApiProperty({
    description: 'Linux kernel version (for eBPF compatibility)',
    example: '5.10.0-1234',
    maxLength: 50,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  kernel_version?: string;

  @ApiProperty({
    description: 'Device manufacturer',
    example: 'Samsung',
    maxLength: 50,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  manufacturer?: string;

  @ApiProperty({
    description: 'Device model',
    example: 'Galaxy S24',
    maxLength: 50,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  model?: string;

  @ApiProperty({
    description: 'Device hardware security module info (JSON stringified)',
    example: '{"hsm_type":"TPM2.0","hsm_oem":"Qualcomm"}',
  })
  @IsOptional()
  @IsString()
  hsm_info?: string;
}
