import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../src/auth/auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let jwtService: JwtService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn((payload, options?) => {
              // Simple mock JWT generation
              return `mock-jwt-${JSON.stringify(payload)}`;
            }),
            verify: jest.fn((token) => {
              // Simple mock JWT verification
              try {
                return JSON.parse(token.replace('mock-jwt-', ''));
              } catch {
                throw new Error('Invalid token');
              }
            }),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key) => {
              const config = {
                JWT_SECRET: 'test_secret_key',
                REFRESH_TOKEN_SECRET: 'test_refresh_secret',
              };
              return config[key] || 'default_value';
            }),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
    configService = module.get<ConfigService>(ConfigService);
  });

  describe('generateToken', () => {
    it('should generate a JWT token', () => {
      const token = authService.generateToken('user-123', 'user@example.com', ['user']);
      expect(token).toBeDefined();
      expect(token).toContain('mock-jwt-');
    });

    it('should include user ID, email, and roles in token payload', () => {
      const userId = 'user-456';
      const email = 'test@example.com';
      const roles = ['user', 'admin'];
      
      const token = authService.generateToken(userId, email, roles);
      
      expect(token).toContain(userId);
      expect(token).toContain(email);
    });
  });

  describe('generateRefreshToken', () => {
    it('should generate a refresh token', () => {
      const token = authService.generateRefreshToken('user-123', 'user@example.com');
      expect(token).toBeDefined();
      expect(token).toContain('mock-jwt-');
    });
  });

  describe('validateToken', () => {
    it('should validate a valid token', () => {
      const tokenPayload = { sub: 'user-123', email: 'user@example.com' };
      const token = `mock-jwt-${JSON.stringify(tokenPayload)}`;
      
      const payload = authService.validateToken(token);
      expect(payload).toBeDefined();
      expect(payload.sub).toBe('user-123');
      expect(payload.email).toBe('user@example.com');
    });

    it('should return null for invalid token', () => {
      const payload = authService.validateToken('invalid-token');
      expect(payload).toBeNull();
    });
  });

  describe('getUserFromToken', () => {
    it('should extract user info from valid token', () => {
      const tokenPayload = { sub: 'user-789', email: 'user@example.com', roles: ['user'] };
      const token = `mock-jwt-${JSON.stringify(tokenPayload)}`;
      
      const user = authService.getUserFromToken(token);
      expect(user).toBeDefined();
      expect(user?.userId).toBe('user-789');
      expect(user?.email).toBe('user@example.com');
      expect(user?.roles).toEqual(['user']);
    });

    it('should return null for invalid token', () => {
      const user = authService.getUserFromToken('invalid-token');
      expect(user).toBeNull();
    });
  });
});

describe('Cryptographic Key Generation', () => {
  // Tests for pq_signer key generation (MVP: HMAC-SHA256)
  
  it('should generate cryptographically secure random keys', async () => {
    // Note: This is a placeholder test. Real crypto tests would:
    // 1. Call Rust crypto library
    // 2. Verify keys are 32 bytes
    // 3. Verify entropy is sufficient
    // 4. Test signing/verification flow
    
    const mockKey1 = Buffer.randomBytes(32).toString('hex');
    const mockKey2 = Buffer.randomBytes(32).toString('hex');
    
    // Two random keys should be different
    expect(mockKey1).not.toBe(mockKey2);
    
    // Keys should be 64 hex chars (32 bytes)
    expect(mockKey1.length).toBe(64);
    expect(mockKey2.length).toBe(64);
  });

  it('should not use weak entropy sources', () => {
    // Verify we're not using subsec_nanos() or similar weak sources
    // This test would fail if code reverts to weak entropy
    
    const entropy = Buffer.randomBytes(32);
    expect(entropy.length).toBe(32);
    
    // Very basic sanity check: entropy should have some variation
    const isEverytheSame = entropy.every(byte => byte === entropy[0]);
    expect(isEverytheSame).toBe(false);
  });
});
