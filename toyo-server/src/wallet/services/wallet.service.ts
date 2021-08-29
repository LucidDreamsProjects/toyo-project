import { SaveWalletDto } from '../dto/save-wallet';
import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';
import { Wallet } from '@arkane-network/arkane-connect/dist/src/models/wallet/Wallet';
import { AuthService } from '../../auth/services/auth.service';

config();

@Injectable()
export class WalletService {
  private readonly DATA_URL = `${process.env.WALLET_API_ENDPOINT}/api/wallets`;
  private readonly WALLET_TYPE = process.env.WALLET_TYPE;
  private readonly SECRET_TYPE = process.env.SECRET_TYPE;

  constructor(private authService: AuthService) {}

  public async createWallet(@Body() wallet: SaveWalletDto): Promise<Wallet> {
    const accessToken = await this.authService.getAccessToken();
    const walletType = this.WALLET_TYPE;
    const secretType = this.SECRET_TYPE;
    const pincode = wallet.pincode;
    const url = this.DATA_URL;

    const dto = {
      walletType: walletType,
      secretType: secretType,
      pincode: pincode,
    };

    return await axios
      .post(url, dto, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => console.log(error));
  }
}
