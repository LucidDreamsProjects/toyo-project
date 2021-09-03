import { Wallet } from '@arkane-network/arkane-connect';
import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { SaveWalletDto } from '../dto/save-wallet';
import { WalletService } from '../services/wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @HttpCode(200)
  @Post()
  public async createWallet(
    @Body() dto: SaveWalletDto,
  ): Promise<Wallet | undefined> {
    return await this.walletService.createWallet(dto);
  }

  @HttpCode(200)
  @Get()
  public async getWallets(): Promise<Wallet[] | undefined> {
    return await this.walletService.getWallets();
  }
}
