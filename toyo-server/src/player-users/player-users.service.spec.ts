import { Test, TestingModule } from '@nestjs/testing';
import { PlayerUsersService } from './player-users.service';

describe('PlayerUsersService', () => {
  let service: PlayerUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerUsersService],
    }).compile();

    service = module.get<PlayerUsersService>(PlayerUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
