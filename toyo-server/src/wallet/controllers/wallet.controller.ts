import { Controller, Post, Body } from '@nestjs/common';
import { CreateWalletDto } from '../dto/create-wallet';
import { WalletService } from '../services/wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('create')
  public async createWallet(): Promise<any> {
    const wallet = await this.walletService.createWallet();
    return wallet;
  }
}
