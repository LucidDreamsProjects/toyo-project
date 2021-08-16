import { CreateContractDto } from '../dto/create-contract.dto';
import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';

config();

@Injectable()
export class ContractService {
  // private readonly ACCESS_TOKEN = process.env.VENLY_ACCESS_TOKEN;
  private readonly APPLICATION_ID = process.env.APPLICATION_ID;

  public async createContract(@Body() req: CreateContractDto): Promise<any> {
    // const accessToken = this.ACCESS_TOKEN;
    const applicationID = this.APPLICATION_ID;
    const url = `https://api-business.arkane.network/api/apps/${applicationID}/contracts`;

    await axios
      .post(url, req, {
        /*  headers: {
          Authorization: `${accessToken}`,
        }, */
      })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => console.log(error));
  }
}
