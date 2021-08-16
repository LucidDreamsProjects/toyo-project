import { CreateWalletDto } from '../dto/create-wallet';
import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';

config();

@Injectable()
export class WalletService {
  private readonly ACCESS_TOKEN = process.env.VENLY_ACCESS_TOKEN;
  private readonly DATA_URL = `${process.env.WALLET_API_ENDPOINT}/api/wallets`;

  public async createWallet(@Body() wallet: CreateWalletDto): Promise<any> {
    const walletType = process.env.WALLET_TYPE;
    const secretType = process.env.SECRET_TYPE;
    const accessToken = this.ACCESS_TOKEN;
    const url = this.DATA_URL;

    const dto = {
      walletType: walletType,
      secretType: secretType,
      pincode: wallet.pincode,
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
