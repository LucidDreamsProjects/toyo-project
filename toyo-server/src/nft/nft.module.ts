import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RedisCacheModule } from '../cache/redisCache.module';
import { NftController } from './controllers/nft.controller';
import { NftService } from './services/nft.service';

@Module({
  imports: [
    RedisCacheModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [NftController],
  providers: [NftService],
  exports: [NftService],
})
export class NftModule {}
