import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from './player/player.module';
import { Contract } from './contract/entities/contract.entity';
import { Template } from './nft/entities/template.entity';
import { Player } from './player/entities/player.entity';
import { Nft } from './nft/entities/nft.entity';
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
      host: '162.240.6.22',
      port: 3306,
      username: `wwtoyo_admin`,
      password: `dd^8A!DPq#ZpjewF2`,
      database: `wwtoyo_universe`,
      entities: [Player, Nft, Template, Contract],
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
