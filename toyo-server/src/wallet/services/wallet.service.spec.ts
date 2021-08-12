import { Test, TestingModule } from '@nestjs/testing';
import { WalletService } from './wallet.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { AxiosResponse } from 'axios';

describe('WalletService', () => {
  let walletService: WalletService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.register({
          timeout: 5000,
          maxRedirects: 5,
        }),
      ],
      providers: [WalletService],
    }).compile();

    walletService = await module.get<WalletService>(WalletService);
  });

  it('should be defined', () => {
    expect(walletService).toBeDefined();
  });

  it('should create a wallet and return that', async () => {
    const walletType = 'WHITE_LABEL';
    const secretType = process.env.SECRET_TYPE;
    const pincode = 1234;

    const dto = {
      walletType: walletType,
      secretType: secretType,
      pincode: pincode,
    };

    return (await walletService.createWallet(dto)).pipe(
      map((axiosResponse: AxiosResponse) => {
        expect(axiosResponse).toBe({
          success: expect(true),
          result: {
            id: expect.any(String),
            address: expect.any(String),
            secretType: expect.stringMatching('MATIC'),
          },
        });
      }),
    );
  });
});
