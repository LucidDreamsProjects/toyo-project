import { CreateWalletDto } from '../dto/create-wallet';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class WalletService {
  constructor(private readonly httpService: HttpService) {}

  public async createWallet(): Promise<Observable<AxiosResponse<any>>> {
    const walletType = 'WHITE_LABEL';
    const secretType = process.env.SECRET_TYPE;
    const pincode = 7591;

    const payload = await this.httpService.post(
      `https://api.arkane.network/api/wallets`,
      {
        walletType: walletType,
        secretType: secretType,
        pincode: pincode,
      },
    );

    const json = payload.pipe(map((response) => response.data));
    console.log(json);

    return json;
  }
}
