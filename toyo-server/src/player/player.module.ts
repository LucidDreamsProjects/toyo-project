import { Module } from '@nestjs/common';
import { PlayerController } from './controllers/player.controller';
import { PlayerService } from './services/player.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from './repositories/player.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerRepository])],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
