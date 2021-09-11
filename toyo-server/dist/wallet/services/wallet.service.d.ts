import { SaveWalletDto } from '../dto/save-wallet';
import { Wallet } from '@arkane-network/arkane-connect/dist/src/models/wallet/Wallet';
import { AuthService } from '../../auth/services/auth.service';
export declare class WalletService {
    private authService;
    private readonly DATA_URL;
    private readonly WALLET_TYPE;
    private readonly SECRET_TYPE;
    constructor(authService: AuthService);
    createWallet(wallet: SaveWalletDto): Promise<Wallet>;
    getWallets(): Promise<Wallet[] | undefined>;
}
