import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from 'src/player/entities/player.entity';
import { AuthHttpModule } from './auth-http.module';

@Module({
  imports: [AuthHttpModule, TypeOrmModule.forFeature([PlayerRepository])],
})
export class AuthModule {}
