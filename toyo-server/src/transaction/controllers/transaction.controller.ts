import { Controller, HttpCode, Param, Get } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @HttpCode(200)
  @Get(':secretType/fees')
  public async getFees(
    @Param('secretType') secretType: string,
  ): Promise<Record<string, string | number>> {
    return await this.transactionService.getFees(secretType);
  }

  @HttpCode(200)
  @Get(':secretType/:transactionHash/status')
  public async getTxStatus(
    @Param('secretType') secretType: string,
    @Param('transactionHash') transactionHash: string,
  ): Promise<Record<string, string | number>> {
    return await this.transactionService.getTxStatus(
      secretType,
      transactionHash,
    );
  }
}
