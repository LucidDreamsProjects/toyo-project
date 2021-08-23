import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from './player.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Player } from '../entities/player.entity';
import { EthereumAddress } from 'wallet.ts';
import { v4 as uuidv4 } from 'uuid';
import { haiku } from '../../utils/haiku';
import { AuthService } from '../../auth/services/auth.service';
import { SavePlayerDto } from '../dto/save-player.dto';
import { WalletService } from '../../wallet/services/wallet.service';

const testKey = Buffer.from(
  '028a8c59fa27d1e0f1643081ff80c3cf0392902acbf76ab0dc9c414b8d115b0ab3',
  'hex',
);

describe('PlayerService', () => {
  const uuid = uuidv4();
  let playerService: PlayerService;
  let authService: AuthService;

  const mockPlayerRepository = {
    savePlayer: jest.fn().mockImplementation(async (dto) => await dto),
    editPlayer: jest.fn().mockImplementation(async (player) => {
      return await {
        playerID: uuid,
        index: Date.now(),
        username: haiku(1),
        email: haiku(2),
        walletAddress: '0xA8yasidjshoauASPLksjmaOIY7DdmnasidgAQSJpadOa',
        ...player,
      };
    }),
    findOneOrFail: jest.fn().mockImplementation(async (index: number) => {
      return await {
        playerID: uuid,
        index: index,
        username: haiku(1),
        email: haiku(2),
        walletAddress: EthereumAddress.from(testKey).address,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayerService,
        AuthService,
        WalletService,
        {
          provide: getRepositoryToken(Player),
          useValue: mockPlayerRepository,
        },
      ],
    }).compile();

    playerService = await module.get<PlayerService>(PlayerService);
    authService = await module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(playerService).toBeDefined();
  });

  it('should create a player record and return that', async () => {
    const uuid = uuidv4();
    const username = haiku(1);
    const email = haiku(2);
    const accessToken = await authService.getAccessToken();

    const dto = {
      playerID: uuid,
      username: username,
      email: email,
      walletAddress: EthereumAddress.from(testKey).address,
      accessToken: accessToken,
    } as SavePlayerDto;

    expect.assertions(1);
    return await playerService.save(dto).then((data) => {
      expect(data).toEqual({
        playerID: dto.playerID,
        username: dto.username,
        email: dto.email,
        walletAddress: dto.walletAddress,
        accessToken: dto.accessToken,
      });
    });
  });

  it('should get a player by index and return that', async () => {
    return await playerService.getByIndex(1001).then((data) => {
      expect(data).toEqual({
        playerID: expect.any(String),
        index: expect.any(Number),
        username: expect.any(String),
        email: expect.any(String),
        walletAddress: expect.any(String),
      });
    });
  });

  it('should edit a player record and return that', async () => {
    const index = 1000;
    const dto = {
      firstName: 'Lucas',
      lastName: 'Cyrne',
      address: 'p.sherman calle wallaby 42 sidney',
    };

    return playerService.editByIndex(index, dto).then((data) => {
      expect(data).toEqual({
        playerID: expect.any(String),
        index: expect.any(Number),
        username: expect.any(String),
        email: expect.any(String),
        firstName: dto.firstName,
        lastName: dto.lastName,
        address: dto.address,
        walletAddress: expect.any(String),
      });
    });
  });
});
