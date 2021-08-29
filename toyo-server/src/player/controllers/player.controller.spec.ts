import { Test, TestingModule } from '@nestjs/testing';
import { PlayerController } from './player.controller';
import { PlayerService } from '../services/player.service';
import { EthereumAddress } from 'wallet.ts';
import { v4 as uuidv4 } from 'uuid';
import { haiku } from '../../utils/haiku';

const testKey = Buffer.from(
  '028a8c59fa27d1e0f1643081ff80c3cf0392902acbf76ab0dc9c414b8d115b0ab3',
  'hex',
);

describe('PlayerController', () => {
  let playerController: PlayerController;

  const mockPlayerService = {
    save: jest.fn(async (dto) => {
      return await {
        index: Date.now(),
        ...dto,
      };
    }),
    findOne: jest.fn().mockImplementation(async (playerId, dto) => {
      return await {
        playerId,
        ...dto,
      };
    }),
    update: jest.fn().mockImplementation(async (playerId, dto) => {
      return await {
        playerId,
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [PlayerService],
    })
      .overrideProvider(PlayerService)
      .useValue(mockPlayerService)
      .compile();

    playerController = module.get<PlayerController>(PlayerController);
  });

  it('should be defined', () => {
    expect(playerController).toBeDefined();
  });

  it('should create a Player and return that', () => {
    const playerId = uuidv4();
    const username = haiku(1);
    const firstName = 'firstName';
    const lastName = 'lastName';
    const email = haiku(2);
    const walletId = uuidv4();
    const balance = 10;

    const player = {
      playerId: playerId,
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      walletId: walletId,
      balance: balance,
    };

    expect.assertions(1);
    return playerController.createController(player).then((data) => {
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

  it('should update a Player by uuid', async () => {
    const playerId = uuidv4();
    const player = {
      firstName: 'Lucas',
      lastName: 'Cyrne',
      address: 'p.sherman calle wallaby 42 sidney',
    };

    expect.assertions(1);
    return await playerController.update(playerId, player).then((data) => {
      expect(data).toEqual({
        playerId: playerId,
        firstName: player.firstName,
        lastName: player.lastName,
        address: player.address,
      });
    });
  });
});
