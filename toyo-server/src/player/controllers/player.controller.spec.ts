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
    getByIndex: jest.fn().mockImplementation(async (index, dto) => {
      return await {
        index,
        ...dto,
      };
    }),
    editByIndex: jest.fn().mockImplementation(async (index, dto) => {
      return await {
        index,
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

  it('should create a Player', () => {
    const uuid = uuidv4();
    const username = haiku(1);
    const email = haiku(2);

    const dto = {
      playerID: uuid,
      username: username,
      email: email,
      walletAddress: EthereumAddress.from(testKey).address,
    };

    expect.assertions(1);
    return playerController.save(dto).then((data) => {
      expect(data).toEqual({
        playerID: dto.playerID,
        index: expect.any(Number),
        username: dto.username,
        email: dto.email,
        walletAddress: dto.walletAddress,
      });
    });
  });

  it('should update a Player', () => {
    const index = 1001;
    const dto = {
      firstName: 'Lucas',
      lastName: 'Cyrne',
      address: 'p.sherman calle wallaby 42 sidney',
    };

    expect.assertions(2);
    return playerController.editByIndex(index, dto).then((data) => {
      expect(data).toEqual({
        index: index,
        ...dto,
      });
      expect(mockPlayerService.editByIndex).toBeCalled();
    });
  });
});
