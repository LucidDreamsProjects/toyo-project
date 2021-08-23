import { Module } from '@nestjs/common';
import { PlayerController } from './controllers/player.controller';
import { PlayerService } from './services/player.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from './repositories/player.repository';
import { Player } from './entities/player.entity';
import { AuthService } from '../auth/services/auth.service';
import { WalletService } from '../wallet/services/wallet.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player, PlayerRepository]),
    HttpModule.register({
      timeout: 15000,
      maxRedirects: 5,
    }),
  ],
  controllers: [PlayerController],
  providers: [PlayerService, AuthService, WalletService],
  exports: [PlayerService],
})
export class PlayerModule {}
