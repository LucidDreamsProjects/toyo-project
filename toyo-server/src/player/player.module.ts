import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from './entities/player.entity';
import { PlayerHttpModule } from './player-http.module';
import { PlayerService } from './services/player.service';

@Module({
  imports: [PlayerHttpModule, TypeOrmModule.forFeature([PlayerRepository])],
  exports: [PlayerService],
})
export class PlayerModule {}
