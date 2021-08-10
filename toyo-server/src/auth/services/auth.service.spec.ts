import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Player } from '../../player/entities/player.entity';

describe('AuthService', () => {
  let authService: AuthService;

  const mockPlayerRepository = {
    savePlayer: jest.fn().mockImplementation((dto) => dto),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    expect.assertions(1);
    return authService.getBearerToken(dto).then((data) => {
      expect(data).toBe({
        access_token: expect.any(String),
        refresh_token: expect.any(String),
        session_state: expect.any(String),
      });
    });
  });
});
