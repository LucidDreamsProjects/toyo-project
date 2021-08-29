import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../../auth/services/auth.service';
import { WalletService } from './wallet.service';

describe('WalletService', () => {
  let walletService: WalletService;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WalletService, AuthService],
    }).compile();

    walletService = await module.get<WalletService>(WalletService);
    authService = await module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(walletService).toBeDefined();
  });

  it('should create a wallet and return that', async () => {
    const walletType = process.env.WALLET_TYPE;
    const secretType = process.env.SECRET_TYPE;
    const pincode = 1234;

    const dto = {
      walletType: walletType,
      secretType: secretType,
      pincode: pincode,
    };

    return await walletService.createWallet(dto).then((wallet) => {
      expect(wallet).toEqual({
        success: expect.any(Boolean),
        result: {
          address: expect.any(String),
          alias: expect.any(String),
          archived: expect.any(Boolean),
          secretType: expect.stringMatching('MATIC'),
          balance: {
            available: expect.any(Boolean),
            balance: expect.any(Number),
            decimals: expect.any(Number),
            gasBalance: expect.any(Number),
            gasSymbol: expect.any(String),
            rawBalance: expect.any(String),
            rawGasBalance: expect.any(String),
            secretType: expect.any(String),
            symbol: expect.any(String),
          },
          createdAt: expect.any(String),
          description: expect.any(String),
          hasCustomPin: expect.any(Boolean),
          id: expect.any(String),
          identifier: null,
          primary: expect.any(Boolean),
          walletType: expect.any(String),
        },
      });
    });
  }, 12500);
});
