import { TransactionService } from '../services/transaction.service';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    getFees(secretType: string): Promise<Record<string, string | number>>;
    getTxStatus(secretType: string, transactionHash: string): Promise<Record<string, string | number>>;
}
