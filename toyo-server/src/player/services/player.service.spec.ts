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
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { PlayerRepository } from '../repositories/player.repository';

const testKey = Buffer.from(
  '028a8c59fa27d1e0f1643081ff80c3cf0392902acbf76ab0dc9c414b8d115b0ab3',
  'hex',
);

describe('PlayerService', () => {
  let playerService: PlayerService;

  const mockPlayerRepository = {
    savePlayer: jest.fn().mockImplementation(async (player: Player) => {
      return await {
        index: Date.now(),
        ...player,
      };
    }),
    findOnePlayer: jest.fn().mockImplementation(async (playerId: string) => {
      return await {
        playerId: playerId,
        index: 1001,
        username: haiku(1),
        firstName: 'firstName',
        lastName: 'lastName',
        email: haiku(2),
        wallets: uuidv4(),
      };
    }),
    updatePlayer: jest
      .fn()
      .mockImplementation(async (playerId: string, dto: UpdatePlayerDto) => {
        return await {
          playerId: playerId,
          index: expect.any(Number),
          username: dto.address,
          firstName: dto.firstName,
          lastName: dto.lastName,
          email: dto.email,
          wallets: dto.wallets,
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
          provide: PlayerRepository,
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
    const wallets = uuidv4();

    const player = {
      playerId: playerId,
      username: username,
      firstName: 'firstName',
      lastName: 'lastName',
      email: email,
      wallets: wallets,
    } as SavePlayerDto;

    // expect.assertions(1);
    return await playerService.savePlayer(player).then((data) => {
      expect(data).toEqual({
        playerId: player.playerId,
        index: expect.any(Number),
        username: player.username,
        firstName: player.firstName,
        lastName: player.lastName,
        email: player.email,
        wallets: player.wallets,
      });
    });
  });

  /* it('should get a player and return that', async () => {
    const playerId = uuidv4();

    return await playerService.findOnePlayer(playerId).then((player) => {
      expect(player).toEqual({
        playerId: playerId,
        index: expect.any(Number),
        username: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        email: expect.any(String),
        wallets: expect.any(String),
      });
    });
  }); */

  /* it('should edit a player record and return that', async () => {
    const playerId = uuidv4();
    const playerDto = {
      firstName: 'Lucas',
      lastName: 'Cyrne',
      address: 'p.sherman calle wallaby 42 sidney',
    };

    return playerService.updatePlayer(playerId, playerDto).then((player) => {
      expect(player).toEqual({
        playerId: playerId,
        index: expect.any(Number),
        username: expect.any(String),
        email: expect.any(String),
        firstName: playerDto.firstName,
        lastName: playerDto.lastName,
        address: playerDto.address,
        wallets: expect.any(String),
      });
    });
  }); */
});
