/**
 * Auth Service
 * Handles JWT token generation, validation, and user authentication
 */

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export interface JwtPayload {
  sub: string;
  email: string;
  roles?: string[];
  iat?: number;
  exp?: number;
}

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  /**
   * Generate JWT token for a user
   */
  generateToken(userId: string, email: string, roles: string[] = ['user']): string {
    const payload: JwtPayload = {
      sub: userId,
      email,
      roles,
    };
    return this.jwtService.sign(payload);
  }

  /**
   * Generate refresh token (longer expiry)
   */
  generateRefreshToken(userId: string, email: string): string {
    const payload: JwtPayload = {
      sub: userId,
      email,
    };
    return this.jwtService.sign(payload, {
      expiresIn: '7d',
      secret: this.configService.get<string>('REFRESH_TOKEN_SECRET', 'change_me_in_production'),
    });
  }

  /**
   * Validate JWT token
   */
  validateToken(token: string): JwtPayload | null {
    try {
      const decoded = this.jwtService.verify<JwtPayload>(token);
      return decoded as JwtPayload;
    } catch (error) {
      return null;
    }
  }

  /**
   * Extract user context from JWT payload
   */
  getUserFromToken(token: string): { userId: string; email: string; roles: string[] } | null {
    const payload = this.validateToken(token);
    if (!payload) return null;

    return {
      userId: payload.sub,
      email: payload.email,
      roles: payload.roles || [],
    };
  }
}
