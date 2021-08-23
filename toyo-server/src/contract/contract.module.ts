import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthService } from '../auth/services/auth.service';
import { ContractController } from './controllers/contract.controller';
import { ContractService } from './services/contract.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 12500,
      maxRedirects: 5,
    }),
    AuthService,
  ],
  controllers: [ContractController],
  providers: [ContractService, AuthService],
  exports: [ContractService],
})
export class ContractModule {}
