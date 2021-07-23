import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerUsersService } from './player-users.service';
import { PlayerUsersResolver } from './player-users.resolver';
import { PlayerUser } from './entities/player-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerUser])],
  providers: [PlayerUsersResolver, PlayerUsersService],
  controllers: [],
})
export class PlayerUsersModule {}
