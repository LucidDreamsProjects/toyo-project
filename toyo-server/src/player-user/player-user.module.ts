import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerUserRepository } from './entities/player-user.entity';
import { PlayerUserHttpModule } from './player-user-http.module';

@Module({
  imports: [
    PlayerUserHttpModule,
    TypeOrmModule.forFeature([PlayerUserRepository]),
  ],
})
export class PlayerUserModule {}
