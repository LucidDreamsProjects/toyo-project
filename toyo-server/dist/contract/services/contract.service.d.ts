import { ContractRepository } from '../repositories/contract.repository';
import { CreateContractDto } from '../dto/create-contract.dto';
import { AuthService } from '../../auth/services/auth.service';
export declare class ContractService {
    private contractRepository;
    private authService;
    private readonly DATA_URL;
    constructor(contractRepository: ContractRepository, authService: AuthService);
    createContract(dto: CreateContractDto): Promise<Record<string, string | number> | void>;
}
