import { CreateContractDto } from '../dto/create-contract.dto';
import { ContractService } from '../services/contract.service';
export declare class ContractController {
    private readonly contractService;
    constructor(contractService: ContractService);
    createContract(dto: CreateContractDto): Promise<any>;
}
