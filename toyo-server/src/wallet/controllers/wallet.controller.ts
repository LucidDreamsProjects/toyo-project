import { Controller, Post, Req } from '@nestjs/common';
import { CreateWalletDto } from '../dto/create-wallet';
import { WalletService } from '../services/wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('create')
  public async createWallet(@Req() request: CreateWalletDto): Promise<any> {
    const wallet = await this.walletService.createWallet(request);
    return wallet;
  }
}
