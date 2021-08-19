import { CreateNftDto } from '../dto/create-nft.dto';
import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';
import { RedisCacheService } from '../../cache/redisCache.service';
import { MintNftDto } from '../dto/mint-nft.dto';

config();

@Injectable()
export class NftService {
  private readonly CONTRACT_ID = 807;
  private readonly APPLICATION_ID = process.env.APPLICATION_ID;
  private readonly CREATE_DATA_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/token-types`;
  private readonly MINT_DATA_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/tokens/non-fungible`;
  private readonly ACCESS_TOKEN = process.env.ACCESS_TOKEN;

  constructor(private redisCacheService: RedisCacheService) {}

  public async createNft(@Body() dto: CreateNftDto): Promise<any> {
    const accessToken = this.ACCESS_TOKEN;
    // const accessToken = await this.redisCacheService.get('access_token');
    const url = this.CREATE_DATA_URL;

    // console.log(accessToken);

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

  public async mintNft(@Body() dto: MintNftDto): Promise<any> {
    const accessToken = this.ACCESS_TOKEN;
    // const accessToken = await this.redisCacheService.get('access_token');
    const url = this.MINT_DATA_URL;

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
}
