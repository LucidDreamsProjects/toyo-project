import { Wallet } from '@arkane-network/arkane-connect';
import { SaveWalletDto } from '../dto/save-wallet';
import { WalletService } from '../services/wallet.service';
export declare class WalletController {
    private readonly walletService;
    constructor(walletService: WalletService);
    createWallet(dto: SaveWalletDto): Promise<Wallet | undefined>;
    getWallets(): Promise<Wallet[] | undefined>;
}
