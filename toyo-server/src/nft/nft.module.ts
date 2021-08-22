import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthService } from '../auth/services/auth.service';
import { NftController } from './controllers/nft.controller';
import { NftService } from './services/nft.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 10000,
      maxRedirects: 5,
    }),
    AuthService,
  ],
  controllers: [NftController],
  providers: [NftService, AuthService],
  exports: [NftService],
})
export class NftModule {}
