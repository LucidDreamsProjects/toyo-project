import { CreateNftDto } from '../dto/create-nft.dto';
import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';

config();

@Injectable()
export class NftService {
  private readonly CONTRACT_ID = 616;
  private readonly APPLICATION_ID = process.env.APPLICATION_ID;
  private readonly ACCESS_TOKEN = process.env.VENLY_ACCESS_TOKEN;
  private readonly DATA_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/token-types`;

  public async createNft(@Body() dto: CreateNftDto): Promise<any> {
    const accessToken = this.ACCESS_TOKEN;
    const url = this.DATA_URL;

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
