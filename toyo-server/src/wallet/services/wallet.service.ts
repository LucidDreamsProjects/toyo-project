import { SaveWalletDto } from '../dto/save-wallet';
import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';
import { Wallet } from '@arkane-network/arkane-connect/dist/src/models/wallet/Wallet';
import { RedisCacheService } from '../../cache/redisCache.service';

config();

@Injectable()
export class WalletService {
  private readonly DATA_URL = `${process.env.WALLET_API_ENDPOINT}/api/wallets`;
  private readonly WALLET_TYPE = process.env.WALLET_TYPE;
  private readonly SECRET_TYPE = process.env.SECRET_TYPE;
  private readonly ACCESS_TOKEN = process.env.ACCESS_TOKEN;

  constructor(private redisCacheService: RedisCacheService) {}

  public async createWallet(@Body() wallet: SaveWalletDto): Promise<Wallet> {
    const walletType = this.WALLET_TYPE;
    const secretType = this.SECRET_TYPE;
    const pincode = wallet.pincode;
    const accessToken = this.ACCESS_TOKEN;
    // const accessToken = await this.redisCacheService.get('access_token');
    const url = this.DATA_URL;

    // console.log(accessToken);

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
