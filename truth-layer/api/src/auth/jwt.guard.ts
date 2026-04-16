/**
 * JWT Authentication Guard
 * Protects routes that require a valid JWT token
 * 
 * Usage:
 *   @UseGuards(JwtAuthGuard)
 *   @Get('/protected')
 *   protectedRoute() { ... }
 */

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
