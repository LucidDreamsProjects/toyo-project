import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from '../services/auth.service';
import { config } from 'dotenv';

config();

describe('AuthController', () => {
  let authController: AuthController;

  const mockAuthService = {
    getAccessToken: jest.fn(async (token) => {
      await expect.any(String);
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

  expect.assertions(1);
  it('should get access token and return that', async () => {
    return authController.getBearerToken().then((response) => {
      expect.any(String);
    });
  });
});
