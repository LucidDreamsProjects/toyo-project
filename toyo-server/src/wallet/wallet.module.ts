import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WalletService } from './services/wallet.service';
import { WalletController } from './controllers/wallet.controller';
import { AuthService } from '../auth/services/auth.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 10000,
      maxRedirects: 5,
    }),
  ],
  controllers: [WalletController],
  providers: [WalletService, AuthService],
  exports: [WalletService],
})
export class WalletModule {}
