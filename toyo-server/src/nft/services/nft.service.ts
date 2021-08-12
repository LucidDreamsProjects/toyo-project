import { CreateNftDto } from '../dto/create-nft.dto';
import { Body, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { config } from 'dotenv';

config();

@Injectable()
export class NftService {
  constructor(private readonly httpService: HttpService) {}

  public async createNft(
    @Body() request: CreateNftDto,
  ): Promise<Observable<AxiosResponse<any>>> {
    const applicationID = process.env.APPLICATION_ID;

    const payload = await this.httpService.post(
      `https://api-business.arkane.network/api/apps/${applicationID}/contracts/{{contract_id}}/token-types`,
      request,
    );

    const json = payload.pipe(map((response) => response.data));
    console.log(json);

    return json;
  }
}
