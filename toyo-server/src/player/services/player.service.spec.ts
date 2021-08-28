import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from './player.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Player } from '../entities/player.entity';
import { EthereumAddress } from 'wallet.ts';
import { v4 as uuidv4 } from 'uuid';
import { haiku } from '../../utils/haiku';
import { AuthService } from '../../auth/services/auth.service';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { WalletService } from '../../wallet/services/wallet.service';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { PlayerRepository } from '../repositories/player.repository';

const testKey = Buffer.from(
  '028a8c59fa27d1e0f1643081ff80c3cf0392902acbf76ab0dc9c414b8d115b0ab3',
  'hex',
);

describe('PlayerService', () => {
  let playerService: PlayerService;

  const mockPlayerRepository = {
    save: jest.fn().mockImplementation(async (player: Player) => {
      return await {
        index: Date.now(),
        ...player,
      };
    }),
    findOne: jest.fn().mockImplementation(async (playerId: string) => {
      return await {
        playerId: playerId,
        index: 1001,
        username: haiku(1),
        firstName: 'firstName',
        lastName: 'lastName',
        email: haiku(2),
        walletId: uuidv4(),
        balance: 10,
      };
    }),
    update: jest
      .fn()
      .mockImplementation(async (playerId: string, dto: UpdatePlayerDto) => {
        return await {
          playerId: playerId,
          index: expect.any(Number),
          username: dto.address,
          firstName: dto.firstName,
          lastName: dto.lastName,
          email: dto.email,
        };
      }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayerService,
        AuthService,
        WalletService,
        PlayerRepository,
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
    const playerId = uuidv4();
    const username = haiku(1);
    const email = haiku(2);
    const walletId = uuidv4();
    const balance = 10;

    const player = {
      playerId: playerId,
      username: username,
      firstName: 'firstName',
      lastName: 'lastName',
      email: email,
      walletId: walletId,
      balance: balance,
    } as CreatePlayerDto;

    expect.assertions(1);
    return await playerService.createService(player).then((data) => {
      expect(data).toEqual({
        playerId: player.playerId,
        index: expect.any(Number),
        username: player.username,
        firstName: player.firstName,
        lastName: player.lastName,
        email: player.email,
        walletId: player.walletId,
      });
    });
  });

  it('should get a player and return that', async () => {
    const playerId = uuidv4();

    return await playerService.findOne(playerId).then((player) => {
      expect(player).toEqual({
        playerId: playerId,
        index: expect.any(Number),
        username: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        email: expect.any(String),
        walletId: expect.any(String),
        balance: expect.any(Number),
      });
    });
  });

  it('should edit a player record and return that', async () => {
    const playerId = uuidv4();
    const playerDto = {
      firstName: 'Lucas',
      lastName: 'Cyrne',
      address: 'p.sherman calle wallaby 42 sidney',
    };

    return playerService.update(playerId, playerDto).then((player) => {
      expect(player).toEqual({
        playerId: playerId,
        index: expect.any(Number),
        username: expect.any(String),
        email: expect.any(String),
        firstName: playerDto.firstName,
        lastName: playerDto.lastName,
        address: playerDto.address,
        walletId: expect.any(String),
        balance: expect.any(Number),
      });
    });
  });
});
