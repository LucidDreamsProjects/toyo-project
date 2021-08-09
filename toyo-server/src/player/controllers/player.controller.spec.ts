import { Test, TestingModule } from '@nestjs/testing';
import { PlayerController } from './player.controller';
import { PlayerService } from '../services/player.service';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { EditPlayerDto } from '../dto/edit-player.dto';

// jest.mock('../services/player.service');

describe('PlayerController', () => {
  let playerController: PlayerController;
  let playerService: PlayerService;

  const mockUsersService = {
    createPlayer: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    editPlayer: jest.fn().mockImplementation((id, dto) => {
      return {
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
      .useValue(mockUsersService)
      .compile();

    playerController = module.get<PlayerController>(PlayerController);
    playerService = module.get<PlayerService>(PlayerService);
  });

  it('should be defined', () => {
    expect(playerController).toBeDefined();
    // console.log('🔧 All Controllers ready to go.');
  });

  it('should create a Player', () => {
    const dto = {
      playerID: 'JwTyIAO-Hyo6ad-a2I1E-P1b2EJ',
      index: 1,
      username: 'Username',
      email: 'email@email.com',
      walletAddress: '0xA8yasidjshoauASPLksjmaOIY7DdmnasidgAQSJpadOa',
    } as CreatePlayerDto;

    expect(playerController.createPlayer(dto)).not.toBe({
      playerID: dto.playerID,
      index: expect.any(Number),
      username: dto.username,
      email: dto.email,
      walletAddress: dto.walletAddress,
    });

    expect(playerService.createPlayer(dto)).toHaveBeenCalled();
    // console.log('🔧 [createPlayer] PLAYER CREATED');
  });

  it('should update a Player', () => {
    const dto = {
      firstName: 'Lucas',
      lastName: 'Cyrne',
      address: 'p.sherman calle wallaby 42 sidney',
    } as EditPlayerDto;

    expect(playerController.editPlayer(1, dto)).toEqual({
      ...dto,
    });

    expect(playerService.editPlayer(1, dto)).toHaveBeenCalled();
    // console.log('🔧 [editPlayer] PLAYER UPDATED');
  });
});
