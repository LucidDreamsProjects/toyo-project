import { Repository, EntityRepository } from 'typeorm';
import { Contract } from '../entities/contract.entity';
import { Injectable } from '@nestjs/common';
import { SaveContractDto } from '../dto/save-contract.dto';

@Injectable()
@EntityRepository(Contract)
export class ContractRepository extends Repository<Contract> {
  public async saveContract(dto: SaveContractDto): Promise<Contract> {
    const { contractId, name, description, chain, symbol, externalUrl } = dto;

    const contract = new Contract();
    contract.contractId = contractId;
    contract.name = name;
    contract.description = description;
    contract.chain = chain;
    contract.symbol = symbol;
    contract.externalUrl = externalUrl;

    await this.save(contract);
    return contract;
  }
}
