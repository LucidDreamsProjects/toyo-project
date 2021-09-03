import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { CreateContractDto } from '../dto/create-contract.dto';
import { ContractService } from '../services/contract.service';

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @HttpCode(200)
  @Post()
  public async createContract(@Body() dto: CreateContractDto): Promise<any> {
    return await this.contractService.createContract(dto);
  }
}
