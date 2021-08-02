import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from './player.service';
import { PlayerRepository } from '../repositories/player.repository';
import { NotFoundException } from '@nestjs/common';

describe('PlayerService', () => {
  let playerService: PlayerService;
  let playerRepository: PlayerRepository;
  const mockPlayerRepository = () => ({
    createPlayer: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
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
    }).compile();

    playerService = await module.get<PlayerService>(PlayerService);
    playerRepository = await module.get<PlayerRepository>(PlayerRepository);
  });

  describe('createPlayer', () => {
    it('should save a player in the database', async () => {
      playerRepository.createPlayer.mockResolvedValue('somePlayer');
      expect(playerRepository.createPlayer).not.toHaveBeenCalled();
      const createPlayerDto = {
        refreshToken:
          'eyJhbGciOiJIUzI1NiIsInR5D9smMSanSMDdUIiwia2lkIiA6IlMDc2NC1lZmVkLTQyMmEtYmU0Mi1iZTcwYmY1Nzg2NDYifQ.eyJleHAiOjE2MzEyNTU5NDUsImlhdCI6Mkd8u12kdasdasgDASHOTk0NSwianRpIjoiOGEzOTU3MjQtNWYyMS00ZGFlLTkyYWEtYjNhYjc3MjNmNTgzIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi1zdGFnaW5nLmFya2FuZS5uZXR3b3JrL2F1dGgvcmVhbG1zL0Fya2FuZSIsImF1ZCI6Imh0dHBzOi8vbG9naW4tc3RhZ2luZy5hcmthbmUubmV0d29yay9hdXRoL3JlYWxtcy9BcmthbmUiLCJzdWIiOiJlZDc0YjAxMC00NzJjLTRjNDAtYmMxMC1hMTgxZTU4ZDdhNWMiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiVGVzdGFjY291bnQtY2Fwc3VsZSIsInNlc3Npb25fc3RhdGUiOiJmMzcyN2ZiMi0xN2MzLTQ5NDctODg5NC1lZASIHjuidsggiLCJzY29wZSI6InZpZXc6d2FsbGV0cyB3aGl0ZWxhYmVsIG1hcmtldDpidXk6c2FsZSBlbWFpbCB1c2U6YWxsLXdhbGxldHMgc2lnbjp3YWxsZXRzIHZpZXc6cHJvZmlsZSBtYXJrZXQ6Y3JlYXRlOnNhbGUgc2F2ZTp0cmFuc2FjdGlvbiBwcm9maWxlIn0.f-IB-0MvWwVRpdkg-xxbDuMT3cTDj_K-DFVk5gN',
        walletAddress: '0xL31e6VNi7VzH1P12asdDAKdaFAHDAS7FjGou6h12u3hASKD58C9e',
        username: 'ToyoMaster069',
      };
      const result = await playerService.createPlayer(createPlayerDto);
      expect(playerRepository.createPlayer).toHaveBeenCalledWith(
        createPlayerDto,
      );
      expect(result).toEqual('somePlayer');
    });
  });

  describe('getPlayers', () => {
    it('should return all players', async () => {
      playerRepository.find.mockResolvedValue('somePlayers');
      expect(playerRepository.find).not.toHaveBeenCalled();
      const result = await playerService.getPlayers();
      expect(playerRepository.find).toHaveBeenCalled();
      expect(result).toEqual('somePlayers');
    });
  });

  describe('getPlayer', () => {
    it('should retrieve a player with an ID', async () => {
      const mockPlayer = {
        id: '1',
        refreshToken:
          'eyJhbGciOiJIUzI1NiIsInR5D9smMSanSMDdUIiwia2lkIiA6IlMDc2NC1lZmVkLTQyMmEtYmU0Mi1iZTcwYmY1Nzg2NDYifQ.eyJleHAiOjE2MzEyNTU5NDUsImlhdCI6Mkd8u12kdasdasgDASHOTk0NSwianRpIjoiOGEzOTU3MjQtNWYyMS00ZGFlLTkyYWEtYjNhYjc3MjNmNTgzIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi1zdGFnaW5nLmFya2FuZS5uZXR3b3JrL2F1dGgvcmVhbG1zL0Fya2FuZSIsImF1ZCI6Imh0dHBzOi8vbG9naW4tc3RhZ2luZy5hcmthbmUubmV0d29yay9hdXRoL3JlYWxtcy9BcmthbmUiLCJzdWIiOiJlZDc0YjAxMC00NzJjLTRjNDAtYmMxMC1hMTgxZTU4ZDdhNWMiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiVGVzdGFjY291bnQtY2Fwc3VsZSIsInNlc3Npb25fc3RhdGUiOiJmMzcyN2ZiMi0xN2MzLTQ5NDctODg5NC1lZASIHjuidsggiLCJzY29wZSI6InZpZXc6d2FsbGV0cyB3aGl0ZWxhYmVsIG1hcmtldDpidXk6c2FsZSBlbWFpbCB1c2U6YWxsLXdhbGxldHMgc2lnbjp3YWxsZXRzIHZpZXc6cHJvZmlsZSBtYXJrZXQ6Y3JlYXRlOnNhbGUgc2F2ZTp0cmFuc2FjdGlvbiBwcm9maWxlIn0.f-IB-0MvWwVRpdkg-xxbDuMT3cTDj_K-DFVk5gN',
        walletAddress: '0xL31e6VNi7VzH1P12asdDAKdaFAHDAS7FjGou6h12u3hASKD58C9e',
        username: 'mockedPlayer',
        email: 'mocked_email@gmail.com',
        firstName: 'Mocked',
        lastName: 'User',
        icon: 1,
        address: 'Mocked Street, 231, 1st Avenue JP. Sherpard',
        replays: null,
        role: 3,
      };
      playerRepository.findOne.mockResolvedValue(mockPlayer);
      const result = await playerService.getPlayer(1);
      expect(result).toEqual(mockPlayer);
      expect(playerRepository.findOne).toHaveBeenCalledWith(1);
    });

    it('throws an error as a player is not found', () => {
      playerRepository.findOne.mockResolvedValue(null);
      expect(playerService.getPlayer(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('deletePlayer', () => {
    it('should delete player', async () => {
      playerRepository.delete.mockResolvedValue(1);
      expect(playerRepository.delete).not.toHaveBeenCalled();
      await playerService.deletePlayer(1);
      expect(playerRepository.delete).toHaveBeenCalledWith(1);
    });
  });
});
