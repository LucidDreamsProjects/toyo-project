import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from '../services/auth.service';
import { config } from 'dotenv';

config();

describe('AuthController', () => {
  let authController: AuthController;

  const mockAuthService = {
    getBearerToken: jest.fn((dto) => {
      return {
        access_token: expect.any(String),
        refresh_token: expect.any(String),
        session_state: expect.any(Number),
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .compile();

    authController = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  it('should get a bearer and refresh token', () => {
    const client_id = `${process.env.VENLY_ID}`;
    const client_secret = `${process.env.VENLY_SECRET}`;

    expect.assertions(2);
    return authController
      .getBearerToken(client_id, client_secret)
      .then((data) => {
        expect(data).toBe({
          access_token: expect.any(String),
          refresh_token: expect.any(String),
          session_state: expect.any(String),
        });
        expect(mockAuthService.getBearerToken).toBeCalled();
      });
  });
});
