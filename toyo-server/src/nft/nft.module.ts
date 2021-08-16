import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NftController } from './controllers/nft.controller';
import { NftService } from './services/nft.service';

@Module({
  imports: [
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
