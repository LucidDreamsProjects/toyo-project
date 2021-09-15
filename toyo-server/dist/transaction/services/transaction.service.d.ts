import { AuthService } from '../../auth/services/auth.service';
export declare class TransactionService {
    private authService;
    private readonly BASE_URL;
    constructor(authService: AuthService);
    getFees(secretType: string): Promise<Record<string, string | number>>;
    getTxStatus(secretType: string, transactionHash: string): Promise<Record<string, string | number>>;
}
