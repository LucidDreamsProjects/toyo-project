import { Module, CacheModule, OnModuleInit } from '@nestjs/common';
import redisStore from 'cache-manager-redis-store';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PlayerModule } from './player/player.module';
import { Player } from './player/entities/player.entity';
import { AuthModule } from './auth/auth.module';
import { config } from 'dotenv';
import { ContractModule } from './contract/contract.module';
import { NftModule } from './nft/nft.module';
import { WalletModule } from './wallet/wallet.module';
import { AuthService } from './auth/services/auth.service';
import { WalletService } from './wallet/services/wallet.service';
import { PlayerService } from './player/services/player.service';
import { ContractService } from './contract/services/contract.service';
import { NftService } from './nft/services/nft.service';

config();

@Module({
  imports: [
    AuthModule,
    ContractModule,
    NftModule,
    WalletModule,
    PlayerModule,
    TypeOrmModule.forRoot({
      type: 'mysql' as any,
      host: '162.240.6.22',
      port: 3306,
      username: 'wwtoyo_admin',
      password: 'dd^8A!DPq#ZpjewF2',
      database: 'wwtoyo_universe',
      entities: [Player],
      logging: ['error'],
      maxQueryExecutionTime: 1000,
      synchronize: false,
    }),
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 5003,
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly authService: AuthService,
    private readonly walletService: WalletService,
    private readonly playerService: PlayerService,
    private readonly contractService: ContractService,
    private readonly nftService: NftService,
  ) {}

  onModuleInit() {
    console.log('The module has been initialized.');
  }
}
