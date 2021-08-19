import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from './player.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Player } from '../entities/player.entity';
import { EthereumAddress } from 'wallet.ts';
import { v4 as uuidv4 } from 'uuid';
import { haiku } from '../../utils/haiku';
import { RedisCacheModule } from '../../cache/redisCache.module';

const testKey = Buffer.from(
  '028a8c59fa27d1e0f1643081ff80c3cf0392902acbf76ab0dc9c414b8d115b0ab3',
  'hex',
);

describe('PlayerService', () => {
  let playerService: PlayerService;

  const mockPlayerRepository = {
    savePlayer: jest.fn().mockImplementation((dto) => dto),
    editPlayer: jest.fn().mockImplementation((player) =>
      Promise.resolve({
        playerID: uuidv4(),
        index: Date.now(),
        username: haiku(1),
        email: haiku(2),
        walletAddress: '0xA8yasidjshoauASPLksjmaOIY7DdmnasidgAQSJpadOa',
        ...player,
      }),
    ),
    findOneOrFail: jest.fn().mockImplementation((playerID: string) =>
      Promise.resolve({
        playerID: playerID,
        index: Date.now(),
        username: haiku(1),
        email: haiku(2),
        walletAddress: EthereumAddress.from(testKey).address,
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RedisCacheModule],
      providers: [
        PlayerService,
        {
          provide: getRepositoryToken(Player),
          useValue: mockPlayerRepository,
        },
      ],
    }).compile();

    playerService = await module.get<PlayerService>(PlayerService);
  });

  it('should be defined', () => {
    expect(playerService).toBeDefined();
  });

  it('should create a player record and return that', async () => {
    const dto = {
      playerID: uuidv4(),
      index: Date.now(),
      username: haiku(1),
      email: haiku(2),
      walletAddress: EthereumAddress.from(testKey).address,
      refreshToken: 'refreshToken',
    };

    expect.assertions(1);
    return playerService.save(dto).then((data) => {
      expect(data).toEqual({
        playerID: dto.playerID,
        index: dto.index,
        username: dto.username,
        email: dto.email,
        walletAddress: dto.walletAddress,
        refreshToken: dto.refreshToken,
      });
    });
  });

  it('should edit a player record and return that', async () => {
    const uuid = uuidv4();
    const dto = {
      firstName: 'Lucas',
      lastName: 'Cyrne',
      address: 'p.sherman calle wallaby 42 sidney',
    };

    return playerService.editById(uuid, dto).then((data) => {
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
