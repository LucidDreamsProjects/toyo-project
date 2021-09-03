import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth/services/auth.service';
import { ContractController } from './controllers/contract.controller';
import { ContractRepository } from './repositories/contract.repository';
import { ContractService } from './services/contract.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContractRepository]),
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
