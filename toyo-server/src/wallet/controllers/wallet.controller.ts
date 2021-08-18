import { Wallet } from '@arkane-network/arkane-connect';
import { Body, Controller, Post } from '@nestjs/common';
import { SaveWalletDto } from '../dto/save-wallet';
import { WalletService } from '../services/wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('create')
  public async createWallet(@Body() dto: SaveWalletDto): Promise<Wallet> {
    return await this.walletService.createWallet(dto);
  }
}
