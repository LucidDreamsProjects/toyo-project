import { Module } from '@nestjs/common';
import { PlayerUserModule } from './player-user.module';
import { PlayerUserService } from './services/player-user.service';
import { PlayerUserController } from './controllers/player-user.controller';

@Module({
  imports: [PlayerUserModule],
  providers: [PlayerUserService],
  controllers: [PlayerUserController],
})
export class UserHttpModule {}
