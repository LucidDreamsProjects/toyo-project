import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from '../services/auth.service';
import { config } from 'dotenv';

config();

describe('AuthController', () => {
  let authController: AuthController;

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
    const grantType = process.env.GRANT_TYPE;
    const clientID = process.env.VENLY_ID;
    const clientSecret = process.env.VENLY_SECRET;

    const dto = {
      grant_type: grantType,
      client_id: clientID,
      client_secret: clientSecret,
    };

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
