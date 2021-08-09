import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from './player.service';
import { PlayerRepository } from '../repositories/player.repository';
import { NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from '../dto/create-player.dto';

describe('PlayerService', () => {
  let playerService: PlayerService;
  let playerRepository: PlayerRepository;

  const mockPlayerRepository = () => ({
    createPlayer: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    editPlayer: jest.fn().mockImplementation((id, dto) => {
      return {
        id,
        ...dto,
      };
    }),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayerService,
        {
          provide: PlayerRepository,
          useFactory: mockPlayerRepository,
        },
      ],
    })
      .overrideProvider(PlayerRepository)
      .useValue(mockPlayerRepository)
      .compile();

    playerService = await module.get<PlayerService>(PlayerService);
    playerRepository = await module.get<PlayerRepository>(PlayerRepository);
  });

  it('should be defined', () => {
    expect(playerService).toBeDefined();
  });

  describe('createPlayer', () => {
    it('should create a player', async () => {
      const player = {} as CreatePlayerDto;
      const mockPlayer = {} as jest.Mock<CreatePlayerDto>;

      playerRepository.createPlayer.mockResolvedValue(mockPlayer);
      expect(playerRepository.createPlayer).not.toHaveBeenCalled();

      const createPlayerDto = {
        userID: 'userID',
        sessionID: 'sessionID',
        username: 'ToyoMaster069',
        email: 'emailtesting@demo.com',
        walletAddress: '0xL31e6VNi7VzH1P12asdDAKdaFAHDAS7FjGou6h12u3hASKD58C9e',
      };

      const result = await playerService
        .createPlayer(player)
        .catch((error) => console.log(error));

      expect(playerRepository.createPlayer).toHaveBeenCalledWith(
        createPlayerDto,
      );

      expect(result).toEqual(mockPlayer);
    });
  });

  describe('getPlayers', () => {
    it('should return all players', async () => {
      playerRepository.find.mockResolvedValue('somePlayers');
      expect(playerRepository.find).not.toHaveBeenCalled();
      const result = await playerService
        .getPlayers()
        .catch((error) => console.log(error));
      expect(playerRepository.find).toHaveBeenCalled();
      expect(result).toEqual('somePlayers');
    });
  });

  describe('getPlayer', () => {
    it('should retrieve a player with an ID', async () => {
      const mockPlayer = {
        id: '1',
        username: 'mockedPlayer',
        email: 'mocked_email@gmail.com',
        firstName: 'Mocked',
        lastName: 'User',
        icon: 1,
        address: 'Mocked Street, 231, 1st Avenue JP. Sherpard',
        replays: null,
        walletAddress: '0xL31e6VNi7VzH1P12asdDAKdaFAHDAS7FjGou6h12u3hASKD58C9e',
        role: 3,
      };
      playerRepository.findOne.mockResolvedValue(mockPlayer);
      const result = await playerService
        .getPlayerById(1)
        .catch((error) => console.log(error));
      expect(result).toEqual(mockPlayer);
      expect(playerRepository.findOne).toHaveBeenCalledWith(1);
    });

    it('throws an error as a player is not found', () => {
      playerRepository.findOne.mockResolvedValue(null);
      expect(playerService.getPlayerById(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('deletePlayer', () => {
    it('should delete player', async () => {
      playerRepository.delete.mockResolvedValue(1);
      expect(playerRepository.delete).not.toHaveBeenCalled();
      await playerService.deletePlayer(1).catch((error) => console.log(error));
      expect(playerRepository.delete).toHaveBeenCalledWith(1);
    });
  });
});
