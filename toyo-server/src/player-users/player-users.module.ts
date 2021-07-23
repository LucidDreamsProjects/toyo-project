import { Module } from '@nestjs/common';
import { PlayerUsersService } from './player-users.service';
import { PlayerUsersResolver } from './player-users.resolver';

@Module({
  providers: [PlayerUsersResolver, PlayerUsersService]
})
export class PlayerUsersModule {}
