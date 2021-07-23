import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerUserService } from './services/player-user.service';
import { PlayerUserResolver } from './resolver/player-user.resolver';
import { PlayerUser } from './entities/player-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerUser])],
  exports: [TypeOrmModule],
})
export class PlayerUserModule {}
