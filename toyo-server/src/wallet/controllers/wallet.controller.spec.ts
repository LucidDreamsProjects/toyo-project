import { Test, TestingModule } from '@nestjs/testing';
import { WalletController } from './wallet.controller';
import { WalletService } from '../services/wallet.service';

describe('WalletController', () => {
  let walletController: WalletController;

  const mockWalletService = {
    createWallet: jest.fn((dto) => {
      return {
        success: expect.any(Boolean),
        result: {
          id: expect.any(String),
          address: expect.any(String),
          secretType: expect.stringMatching('MATIC'),
        },
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletController],
      providers: [WalletService],
    })
      .overrideProvider(WalletService)
      .useValue(mockWalletService)
      .compile();

    walletController = module.get<WalletController>(WalletController);
  });

  it('should be defined', () => {
    expect(walletController).toBeDefined();
  });

  it('should create a wallet', async () => {
    const secretType = process.env.SECRET_TYPE;
    const walletType = process.env.WALLET_TYPE;
    const pincode = 1234;

    const dto = {
      secretType: secretType,
      walletType: walletType,
      pincode: pincode,
    };

    expect.assertions(1);
    return await walletController.createWallet(dto).then((data) => {
      expect(data).toEqual({
        success: expect.any(Boolean),
        result: {
          id: expect.any(String),
          address: expect.any(String),
          secretType: expect.stringMatching('MATIC'),
        },
      });
    });
  });
});
