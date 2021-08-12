import { Module } from '@nestjs/common';
import { PlayerController } from './controllers/player.controller';
import { PlayerService } from './services/player.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from './repositories/player.repository';
import { Player } from './entities/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player, PlayerRepository])],
  controllers: [PlayerController],
  providers: [PlayerService],
  exports: [PlayerService],
})
export class PlayerModule {}
