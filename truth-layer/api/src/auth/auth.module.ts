/**
 * ==================== AUTH MODULE ====================
 * Provides authentication strategies (JWT, API Key)
 * Includes JWT strategy, guards, and authentication service
 */

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt.guard';
import { ApiKeyGuard } from './api-key.guard';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET', 'change_me_in_production'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRY', '24h'),
        },
      }),
    }),
  ],
  providers: [JwtStrategy, JwtAuthGuard, ApiKeyGuard, AuthService],
  exports: [JwtAuthGuard, ApiKeyGuard, AuthService, JwtModule],
})
export class AuthModule {}
