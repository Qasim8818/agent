/**
 * Swagger / OpenAPI Configuration for Truth Layer API
 * Generates interactive API documentation at /api/docs
 */

import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Truth Layer API')
    .setDescription(
      'Universal Truth Layer - Device Registry & Verification API\n\n' +
      '**Features:**\n' +
      '- Device registration with TPM attestation\n' +
      '- Media upload and cryptographic signing\n' +
      '- Zero-knowledge proof generation for device metrics\n' +
      '- Blockchain anchoring via Arweave\n' +
      '- Real-time verification status and audit trails',
    )
    .setVersion('1.0.0')
    .addTag('Devices', 'Device registration and management')
    .addTag('Media', 'Media upload and verification')
    .addTag('Verify', 'Verification status and proofs')
    .addTag('Batch', 'Batch operations')
    .addTag('Health', 'Service health and readiness')
    .addApiKey({ type: 'apiKey', name: 'X-API-Key', in: 'header' }, 'api-key')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'bearer')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      displayOperationId: true,
      defaultModelsExpandDepth: 2,
      defaultModelExpandDepth: 2,
    },
  });

  // Log Swagger URL
  const baseUrl = process.env.API_URL || 'http://localhost:3000';
  console.log(`📚 Swagger UI: ${baseUrl}/api/docs`);
  console.log(`📖 OpenAPI JSON: ${baseUrl}/api/docs-json`);
}
