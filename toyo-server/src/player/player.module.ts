import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from './entities/player.entity';
import { PlayerHttpModule } from './player-http.module';

@Module({
  imports: [PlayerHttpModule, TypeOrmModule.forFeature([PlayerRepository])],
})
export class PlayerModule {}
