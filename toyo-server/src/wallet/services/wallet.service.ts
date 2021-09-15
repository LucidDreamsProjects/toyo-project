import { Injectable } from '@nestjs/common';
import { AuthService } from '../../auth/services/auth.service';
import { Wallet } from '@arkane-network/arkane-connect';
import axios from 'axios';
import { config } from 'dotenv';

config();

@Injectable()
export class WalletService {
  private readonly BASE_URL = process.env.WALLET_API_ENDPOINT;

  constructor(private authService: AuthService) {}

  public async getWalletById(walletId: string): Promise<Wallet | void> {
    const url = `${this.BASE_URL}/api/wallets/` + walletId;
    console.log('service URL: ', url);
    const accessToken = await this.authService.getAccessToken();

    return await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log('service response: ', response.data);
        return response.data;
      })
      .catch((error) => console.log(error));
  }
}
