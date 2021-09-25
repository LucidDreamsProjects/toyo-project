import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AuthService } from '../../auth/services/auth.service';
import { Token } from '../entities/token.entity';
import { TokenRepository } from '../repositories/token.repository';
import { TokenService } from './token.service';

describe('TokenService', () => {
  let tokenService: TokenService;
  // let authService: AuthService;

  const mockTokenRepository = {
    save: jest.fn().mockImplementation(async (token: Token) => {
      return await {
        tokenId: 1,
        templateId: 1,
        contractId: 1,
        name: 'Generic Non Fungible Token',
        fungible: false,
        owner: 'd5c001b1-eead-475e-baac-43219c14156e',
        transactionHash:
          '0xa853fcedd409ce5584ae153bafce88223f1afe650a77b1a3e5b75814d2171b87',
      };
    }),
  };

  beforeEach(async () => {
    jest.setTimeout(15000);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        TokenService,
        TokenRepository,
        {
          provide: getRepositoryToken(Token),
          useValue: mockTokenRepository,
        },
      ],
    }).compile();

    tokenService = await module.get<TokenService>(TokenService);
    // authService = await module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(tokenService).toBeDefined();
  });

  /* it('should mint a nft and return that', async () => {
    const dto = {
      wallet: '0xaC17244Cd4F718A7a9a2c4dfF2f9C7775934824D',
      typeId: 1,
      quantity: 1,
    };

    return await tokenService.mintToken(dto).then((response) => {
      expect(response).toEqual({});
    });
  }, 15000); */
});
