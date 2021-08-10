import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Player } from '../../player/entities/player.entity';
import { AuthService } from './auth.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { AxiosResponse } from 'axios';

describe('AuthService', () => {
  let authService: AuthService;

  const mockPlayerRepository = {
    savePlayer: jest.fn().mockImplementation((dto) => dto),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.register({
          timeout: 5000,
          maxRedirects: 5,
        }),
      ],
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(Player),
          useValue: mockPlayerRepository,
        },
      ],
    }).compile();

    authService = await module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should request a bearer and refresh token and return that', async () => {
    const dto = {
      grant_type: 'client_credentials',
      client_id: `${process.env.VENLY_ID}`,
      client_secret: `${process.env.VENLY_SECRET}`,
    };
    return (await authService.getBearerToken()).pipe(
      map((axiosResponse: AxiosResponse) => {
        expect(axiosResponse).toBe({
          access_token: expect.any(String),
          refresh_token: expect.any(String),
          session_state: expect.any(String),
        });
      }),
    );
  });
});
