import { Test, TestingModule } from '@nestjs/testing';
import { PlayerUsersResolver } from './player-users.resolver';
import { PlayerUsersService } from './player-users.service';

describe('PlayerUsersResolver', () => {
  let resolver: PlayerUsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerUsersResolver, PlayerUsersService],
    }).compile();

    resolver = module.get<PlayerUsersResolver>(PlayerUsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
