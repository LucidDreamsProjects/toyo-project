import { CreateNftDto } from '../dto/create-nft.dto';
import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';
import { MintNftDto } from '../dto/mint-nft.dto';
import { AuthService } from '../../auth/services/auth.service';

config();

@Injectable()
export class NftService {
  private readonly CONTRACT_ID = 807;
  private readonly APPLICATION_ID = process.env.APPLICATION_ID;
  private readonly CREATE_DATA_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/token-types`;
  private readonly MINT_DATA_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/tokens/non-fungible`;

  constructor(private authService: AuthService) {}

  public async createNft(@Body() dto: CreateNftDto): Promise<any> {
    const url = this.CREATE_DATA_URL;
    const accessToken = await this.authService.getAccessToken();

    return await axios
      .post(url, dto, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        return response.data;
      })
      .catch((error) => console.log(error));
  }

  public async mintNft(@Body() dto: MintNftDto): Promise<void> {
    const accessToken = await this.authService.getAccessToken();
    const url = this.MINT_DATA_URL;

    return await axios
      .post(url, dto, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  }
}
