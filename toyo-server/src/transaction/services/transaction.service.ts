import { Injectable } from '@nestjs/common';
import { AuthService } from '../../auth/services/auth.service';
import axios from 'axios';
import { config } from 'dotenv';

config();

@Injectable()
export class TransactionService {
  private readonly BASE_URL = process.env.WALLET_API_ENDPOINT;

  constructor(private authService: AuthService) {}

  public async getFees(
    secretType: string,
  ): Promise<Record<string, string | number>> {
    const url = `${this.BASE_URL}/api/transactions/${secretType}/fees`;
    const accessToken = await this.authService.getAccessToken();
    console.log('getFee service: ');

    return await axios
      .get(url, {
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

  public async getTxStatus(
    secretType: string,
    transactionHash: string,
  ): Promise<Record<string, string | number>> {
    const url = `${this.BASE_URL}/api/transactions/${secretType}/${transactionHash}/status`;
    const accessToken = await this.authService.getAccessToken();
    console.log('getTxStatus service: ');

    return await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
