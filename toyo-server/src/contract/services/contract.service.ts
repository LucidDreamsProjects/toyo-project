import { CreateContractDto } from '../dto/create-contract.dto';
import { Body, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { config } from 'dotenv';

config();

@Injectable()
export class ContractService {
  constructor(private readonly httpService: HttpService) {}

  public async createContract(
    @Body() request: CreateContractDto,
  ): Promise<Observable<AxiosResponse<any>>> {
    const applicationID = process.env.APPLICATION_ID;

    const payload = await this.httpService.post(
      `https://api-business.arkane.network/api/apps/${applicationID}/contracts`,
      request,
    );

    const json = payload.pipe(map((response) => response.data));
    console.log(json);

    return json;
  }
}
