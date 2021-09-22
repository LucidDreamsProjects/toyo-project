import { Repository } from 'typeorm';
import { Contract } from '../entities/contract.entity';
import { SaveContractDto } from '../dto/save-contract.dto';
export declare class ContractRepository extends Repository<Contract> {
    saveContract(dto: SaveContractDto): Promise<Contract>;
}
