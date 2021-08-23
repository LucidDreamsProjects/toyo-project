import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from './player/player.module';
import { Player } from './player/entities/player.entity';
import { AuthModule } from './auth/auth.module';
import { ContractModule } from './contract/contract.module';
import { NftModule } from './nft/nft.module';
import { WalletModule } from './wallet/wallet.module';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql' as any,
      host: `${process.env.TYPEORM_HOST}`,
      port: 3306,
      username: `${process.env.TYPEORM_USERNAME}`,
      password: `${process.env.TYPEORM_PASSWORD}`,
      database: `${process.env.TYPEORM_DATABASE}`,
      entities: [Player],
      logging: false,
      synchronize: false,
      keepConnectionAlive: true,
    }),
    AuthModule,
    WalletModule,
    PlayerModule,
    ContractModule,
    NftModule,
  ],
})
export class AppModule {}
