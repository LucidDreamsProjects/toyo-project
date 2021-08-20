import { CreateContractDto } from '../dto/create-contract.dto';
import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';

config();

@Injectable()
export class ContractService {
  private readonly ACCESS_TOKEN = process.env.VENLY_ACCESS_TOKEN;
  private readonly DATA_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${process.env.APPLICATION_ID}/contracts`;

  public async createContract(@Body() dto: CreateContractDto): Promise<any> {
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
