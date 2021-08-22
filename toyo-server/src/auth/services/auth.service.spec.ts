import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    authService = await module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should request the credentials and return that', async () => {
    return await authService.getCredentials().then((response) => {
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

  it('should request the access token and return that', async () => {
    return await authService.getAccessToken().then((response) => {
      expect.any(String);
    });
  });
});
