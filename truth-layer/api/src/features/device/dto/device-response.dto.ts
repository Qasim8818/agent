/**
 * ==================== DEVICE RESPONSE DTO ====================
 * Response payload for device registration and retrieval
 */

import { ApiProperty } from '@nestjs/swagger';

export class DeviceResponseDto {
  @ApiProperty({
    description: 'Unique device identifier (UUID)',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  device_id: string;

  @ApiProperty({
    description: 'Device display name',
    example: 'Qasim Personal Phone',
  })
  device_name: string;

  @ApiProperty({
    description: 'Device type',
    example: 'ANDROID',
    enum: ['ANDROID', 'IOS', 'WEB', 'EMBEDDED'],
  })
  device_type: string;

  @ApiProperty({
    description: 'TPM 2.0 serial number',
    example: 'TPM2.0_SERIAL_ABC123XYZ789',
  })
  tpm_serial: string;

  @ApiProperty({
    description: 'TPM public key (EdDSA format)',
    example: 'a7f2k9x3m1v5b8n9c7d4e6f1h9k3m7p2',
  })
  tpm_public_key: string;

  @ApiProperty({
    description: 'Device status',
    example: 'ACTIVE',
    enum: ['ACTIVE', 'SUSPENDED', 'REVOKED', 'TESTING'],
  })
  status: string;

  @ApiProperty({
    description: 'Timestamp when device was verified',
    example: '2024-01-15T10:30:45.000Z',
    type: Date,
  })
  verified_at: Date;

  @ApiProperty({
    description: 'API key for authenticated requests (returned ONLY on registration)',
    example: 'a7f2k9x3m1v5b8n9c7d4e6f1h9k3m7p2q1r5t8u2v6w9x3y7z1a5b9c3d7e1f5',
    required: false,
  })
  api_key?: string;

  @ApiProperty({
    description: 'Attestation proof for blockchain anchoring',
    example: 'proof_hash_value_for_verification',
    required: false,
  })
  attestation_proof?: string;

  @ApiProperty({
    description: 'User-friendly message',
    example: 'Device registered successfully',
    required: false,
  })
  message?: string;
}
