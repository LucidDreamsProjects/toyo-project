import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RedisCacheModule } from '../cache/redisCache.module';
import { ContractController } from './controllers/contract.controller';
import { ContractService } from './services/contract.service';

@Module({
  imports: [
    RedisCacheModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [ContractController],
  providers: [ContractService],
  exports: [ContractService],
})
export class ContractModule {}
