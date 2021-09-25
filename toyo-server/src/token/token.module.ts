import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth/services/auth.service';
import { TokenController } from './controllers/token.controller';
import { TokenService } from './services/token.service';
import { TokenRepository } from './repositories/token.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TokenRepository]),
    HttpModule.register({
      timeout: 15000,
      maxRedirects: 5,
    }),
  ],
  controllers: [TokenController],
  providers: [TokenService, AuthService],
  exports: [TokenService],
})
export class TokenModule {}
