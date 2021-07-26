import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerUserRepository } from 'src/player-user/entities/player-user.entity';
import { AuthHttpModule } from './auth-http.module';

@Module({
  imports: [AuthHttpModule, TypeOrmModule.forFeature([PlayerUserRepository])],
})
export class AuthModule {}
