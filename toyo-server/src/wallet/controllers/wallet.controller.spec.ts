import { Test, TestingModule } from '@nestjs/testing';
import { WalletController } from './wallet.controller';
import { WalletService } from '../services/wallet.service';

describe('WalletController', () => {
  let walletController: WalletController;

  const mockWalletService = {
    createWallet: jest.fn(() => {
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

  it('should create a wallet', () => {
    const secretType = process.env.SECRET_TYPE;
    const walletType = 'WHITE_LABEL';
    const pinCode = 1234;

    const dto = {
      secretType: secretType,
      walletType: walletType,
      pinCode: pinCode,
    };

    expect.assertions(2);
    return walletController.createWallet().then((data) => {
      expect(data).toEqual({
        success: expect.any(Boolean),
        result: {
          id: expect.any(String),
          address: expect.any(String),
          secretType: expect.stringMatching('MATIC'),
        },
      });
      expect(mockWalletService).toBeCalled();
    });
  });
});
