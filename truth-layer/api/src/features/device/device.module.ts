/**
 * ==================== DEVICE MODULE ====================
 * Feature module for device registration and management
 * Provides: DeviceService, DeviceController
 */

import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';

@Module({
  controllers: [DeviceController],
  providers: [DeviceService],
  exports: [DeviceService],
})
export class DeviceModule {}
