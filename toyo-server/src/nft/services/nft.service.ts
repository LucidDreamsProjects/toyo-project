import { CreateNftDto } from '../dto/create-nft.dto';
import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';
import { MintNftDto } from '../dto/mint-nft.dto';
import { AuthService } from '../../auth/services/auth.service';
import { NFT } from '@arkane-network/arkane-connect/dist/src/models/wallet/NFT';

config();

@Injectable()
export class NftService {
  private readonly CONTRACT_ID = 807;
  private readonly APPLICATION_ID = process.env.APPLICATION_ID;
  private readonly CREATE_DATA_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/token-types`;
  private readonly MINT_DATA_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/tokens/non-fungible`;

  constructor(private authService: AuthService) {}

  public async createNft(@Body() dto: CreateNftDto): Promise<NFT | void> {
    const url = this.CREATE_DATA_URL;
    const accessToken = await this.authService.getAccessToken();

    const nft = await axios
      .post(url, dto, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));

    if (nft) {
      return nft;
    }
  }

  public async mintNft(@Body() dto: MintNftDto): Promise<NFT | void> {
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
