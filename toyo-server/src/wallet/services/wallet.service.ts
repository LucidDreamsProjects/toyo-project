import { CreateWalletDto } from '../dto/create-wallet';
import { Body, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { config } from 'dotenv';

config();

@Injectable()
export class WalletService {
  constructor(private readonly httpService: HttpService) {}

  public async createWallet(
    @Body() request: CreateWalletDto,
  ): Promise<Observable<AxiosResponse<any>>> {
    const walletType = process.env.WALLET_TYPE;
    const secretType = process.env.SECRET_TYPE;

    const payload = await this.httpService.post(
      `https://api.arkane.network/api/wallets`,
      {
        walletType: walletType,
        secretType: secretType,
        pincode: request,
      },
    );

    const json = payload.pipe(map((response) => response.data));
    return json;
  }
}
