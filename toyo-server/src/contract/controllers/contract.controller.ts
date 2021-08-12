import { Controller, Post, Body, Req } from '@nestjs/common';
import { CreateContractDto } from '../dto/create-contract.dto';
import { ContractService } from '../services/contract.service';

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post('create')
  public async createContract(@Req() request: CreateContractDto): Promise<any> {
    const contract = await this.contractService.createContract(request);
    return contract;
  }
}
