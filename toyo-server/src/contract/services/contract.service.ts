import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { ContractRepository } from '../repositories/contract.repository';
import { CreateContractDto } from '../dto/create-contract.dto';
import { Body, Injectable } from '@nestjs/common';
import { AuthService } from '../../auth/services/auth.service';
import { config } from 'dotenv';

config();

@Injectable()
export class ContractService {
  private readonly DATA_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${process.env.APPLICATION_ID}/contracts`;

  constructor(
    @InjectRepository(ContractRepository)
    private contractRepository: ContractRepository,
    private authService: AuthService,
  ) {}

  public async createContract(
    @Body() dto: CreateContractDto,
  ): Promise<Record<string, string | number> | void> {
    const accessToken = await this.authService.getAccessToken();
    const url = this.DATA_URL;

    const contract = await axios
      .post(url, dto, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log("> VENLY'S SERVER | Contract", response.data);
        return response.data;
      })
      .catch((error) => console.log(error));

    if (contract) {
      const _contract = {
        contractId: contract.id,
        name: contract.name,
        description: contract.description,
        chain: contract.secretType,
        symbol: contract.symbol,
        externalUrl: contract.externalUrl,
      };

      console.log('> DATABASE | Contract: ');

      await this.contractRepository.saveContract(_contract);
    }

    return contract;
  }
}
