import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth/services/auth.service';
import { NftController } from './controllers/nft.controller';
import { NftService } from './services/nft.service';
import { NftRepository } from './repositories/nft.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([NftRepository]),
    HttpModule.register({
      timeout: 15000,
      maxRedirects: 5,
    }),
    AuthService,
  ],
  controllers: [NftController],
  providers: [NftService, AuthService],
  exports: [NftService],
})
export class NftModule {}
