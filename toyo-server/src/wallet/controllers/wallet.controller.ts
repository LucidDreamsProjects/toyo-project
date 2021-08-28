import { Wallet } from '@arkane-network/arkane-connect';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SaveWalletDto } from '../dto/save-wallet';
import { WalletService } from '../services/wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @HttpCode(200)
  @Post('create')
  public async createWallet(
    @Body() dto: SaveWalletDto,
  ): Promise<Wallet | undefined> {
    const wallet = await this.walletService.createWallet(dto);

    if (wallet) {
      return wallet;
    }
  }
}
