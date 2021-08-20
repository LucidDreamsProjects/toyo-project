import { CacheModule, Module, OnApplicationBootstrap } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { PlayerController } from './controllers/player.controller';
import { PlayerService } from './services/player.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from './repositories/player.repository';
import { Player } from './entities/player.entity';
import { WalletService } from 'src/wallet/services/wallet.service';
import { ContractService } from 'src/contract/services/contract.service';
import { NftService } from 'src/nft/services/nft.service';
import { v4 as uuidv4 } from 'uuid';
import { AuthService } from 'src/auth/services/auth.service';
import { SaveWalletDto } from 'src/wallet/dto/save-wallet';
import { Wallet } from '@arkane-network/arkane-connect';
import { SavePlayerDto } from './dto/save-player.dto';
import { RedisCacheService } from 'src/cache/redisCache.service';
import { RedisCacheModule } from 'src/cache/redisCache.module';

@Module({
  imports: [
    RedisCacheModule,
    TypeOrmModule.forFeature([Player, PlayerRepository]),
  ],
  controllers: [PlayerController],
  providers: [
    PlayerService,
    AuthService,
    WalletService,
    ContractService,
    NftService,
  ],
  exports: [PlayerService],
})
export class PlayerModule implements OnApplicationBootstrap {
  constructor(
    private redisCacheService: RedisCacheService,
    private readonly authService: AuthService,
    private readonly walletService: WalletService,
    private readonly playerService: PlayerService,
    private readonly contractService: ContractService,
    private readonly nftService: NftService,
  ) {}

  onApplicationBootstrap() {}

  /* private async checkIfAdminExists(): Promise<boolean> {
    const admin = await this.playerService.getById('69');

    if (admin.role === 1) {
      return true;
    }
    return false;
  }

  private async getBearerToken(): Promise<void | string> {
    return await this.redisCacheService.get('refresh_token');
  }

  private async createAdminWallet(): Promise<Wallet> {
    const walletDto = {
      pincode: 1234,
    } as SaveWalletDto;

    return await this.walletService.createWallet(walletDto);
  }

  private async createAdminAccount() {
    const uuid = uuidv4();
    const wallet = await this.createAdminWallet();
    const refreshToken = await this.getBearerToken();

    const adminDto = {
      playerID: uuid,
      index: 69,
      username: 'SixNine',
      email: 'sixnine@email.com',
      walletAddress: wallet.address,
      refreshToken: refreshToken,
    } as SavePlayerDto;

    const admin = await this.playerService.save(adminDto);
    console.log(admin);
  }

  async onApplicationBootstrap(): Promise<void> {
    const access_token = await this.redisCacheService.get('access_token');
    const refresh_token = await this.redisCacheService.get('refresh_token');
    const session_state = await this.redisCacheService.get('session_state');

    console.log(
      `👷 CACHE STORE - 👷 ACCESS_TOKEN: ${access_token} - 👷 REFRESH_TOKEN: ${refresh_token} - 👷 SESSION_STATE: ${session_state}`,
    );

    //TODO: Check if admin account exist
    const adminExists = await this.checkIfAdminExists().catch((err) =>
      console.log(err),
    );

    if (!adminExists) {
      //TODO: Create a admin account
      console.log(`👷 ADMIN WASN'T CREATED YET... CREATING A NEW ONE...`);
      const admin = await this.createAdminAccount();
      console.log(`👷 ADMIN ACCOUNT CREATED!`, admin);
    }

    const admin = this.playerService.getById('69');
    console.log(`👷 ADMIN ACCOUNT FOUND!`, admin);
  } */
  //? Our To-do list!
  //TODO: Create a main smart contract and keep track
  //TODO: Create a NFT template
  //TODO: Use player account in a faucet
  //TODO: Mint some NFT!!!
}
