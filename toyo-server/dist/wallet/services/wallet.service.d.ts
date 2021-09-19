import { AuthService } from '../../auth/services/auth.service';
import { Wallet } from '@arkane-network/arkane-connect';
export declare class WalletService {
    private authService;
    private readonly BASE_URL;
    constructor(authService: AuthService);
    getWalletById(walletId: string): Promise<Wallet | void>;
}
