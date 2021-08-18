import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WalletService } from './services/wallet.service';
import { WalletController } from './controllers/wallet.controller';
import { RedisCacheModule } from 'src/cache/redisCache.module';

@Module({
  imports: [
    RedisCacheModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [WalletController],
  providers: [WalletService],
  exports: [WalletService],
})
export class WalletModule {}
