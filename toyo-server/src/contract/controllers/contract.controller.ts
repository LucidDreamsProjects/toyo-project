import { Controller, Post, Body, Req, HttpCode } from '@nestjs/common';
import { CreateContractDto } from '../dto/create-contract.dto';
import { ContractService } from '../services/contract.service';

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @HttpCode(200)
  @Post('create')
  public async createContract(@Req() req: CreateContractDto): Promise<any> {
    return await this.contractService.createContract(req);
  }
}
