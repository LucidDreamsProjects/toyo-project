import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redisCache.module';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RedisCacheModule],
      providers: [AuthService],
    }).compile();

    authService = await module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should request a bearer and refresh token and return that', async () => {
    return await authService.getBearerToken().then((response) => {
      expect(response).toEqual({
        access_token: expect.any(String),
        expires_in: expect.any(Number),
        'not-before-policy': expect.any(Number),
        refresh_expires_in: expect.any(Number),
        refresh_token: expect.any(String),
        scope: expect.any(String),
        session_state: expect.any(String),
        token_type: expect.stringMatching('bearer'),
      });
    });
  });
});
