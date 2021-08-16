import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from '../services/auth.service';
import { config } from 'dotenv';
import { HttpModule } from '@nestjs/axios';

config();

describe('AuthController', () => {
  let authController: AuthController;
  // let authService: AuthService;

  const mockAuthService = {
    getBearerToken: jest.fn(() => {
      return {
        access_token: expect.any(String),
        refresh_token: expect.any(String),
        session_state: expect.any(String),
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      /* imports: [
        HttpModule.register({
          timeout: 5000,
          maxRedirects: 5,
        }),
      ], */
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

  it('should get a bearer and refresh token', async () => {
    expect.assertions(2);
    return authController.getBearerToken().then((data) => {
      // console.log(data);
      expect(data).toEqual({
        access_token: expect.any(String),
        refresh_token: expect.any(String),
        session_state: expect.any(String),
      });
      expect(mockAuthService.getBearerToken).toBeCalled();
    });
  });
});
