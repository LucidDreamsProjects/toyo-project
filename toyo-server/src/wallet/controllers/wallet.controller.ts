import { Wallet } from '@arkane-network/arkane-connect';
import { Controller, HttpCode, Param, Get } from '@nestjs/common';
import { WalletService } from '../services/wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @HttpCode(200)
  @Get(':walletId')
  public async getWalletById(
    @Param('walletId') walletId: string,
  ): Promise<Wallet | void> {
    console.log('controller');
    return await this.walletService.getWalletById(walletId);
  }
}
