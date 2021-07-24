import { Module } from '@nestjs/common';
import { PlayerUserService } from './services/player-user.service';
import { PlayerUserController } from './controllers/player-user.controller';

@Module({
  controllers: [PlayerUserController],
  providers: [PlayerUserService],
})
export class PlayerUserHttpModule {}
