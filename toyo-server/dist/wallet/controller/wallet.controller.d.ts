import { Wallet } from '@arkane-network/arkane-connect';
import { WalletService } from '../services/wallet.service';
export declare class WalletController {
    private readonly walletService;
    constructor(walletService: WalletService);
    getWalletById(walletId: string): Promise<Wallet | void>;
}
