import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PlayerController } from './controllers/player.controller';
import { PlayerService } from './services/player.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from './repositories/player.repository';
import { AuthService } from '../auth/services/auth.service';
import { WalletService } from '../wallet/services/wallet.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlayerRepository]),
    HttpModule.register({
      timeout: 12500,
      maxRedirects: 5,
    }),
  ],
  controllers: [PlayerController],
  providers: [PlayerService, AuthService, WalletService],
  exports: [PlayerService],
})
export class PlayerModule {}
