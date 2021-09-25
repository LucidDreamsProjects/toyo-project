import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AuthService } from '../../auth/services/auth.service';
import { Contract } from '../entities/contract.entity';
import { ContractRepository } from '../repositories/contract.repository';
import { ContractService } from './contract.service';

describe('ContractService', () => {
  let contractService: ContractService;

  const mockContractRepository = {
    saveContract: jest.fn().mockImplementation(async (contract: Contract) => {
      return await {
        contractId: 1,
        name: 'dummy_contract',
        description: 'a contract created for test purposes',
        chain: 'MATIC',
        symbol: 'DUM',
        externalUrl:
          'https://addee.com.br/wp-content/uploads/2018/11/258580-confira-5-dicas-para-garantir-a-renovacao-de-contrato.jpg',
      };
    }),
  };

  beforeEach(async () => {
    jest.setTimeout(12500);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        ContractService,
        ContractRepository,
        {
          provide: getRepositoryToken(Contract),
          useValue: mockContractRepository,
        },
      ],
    }).compile();

    contractService = await module.get<ContractService>(ContractService);
  });

  it('should be defined', () => {
    expect(contractService).toBeDefined();
  });

  /* it('should create a contract and return that', async () => {
    const name = 'Toyo Final Ultimate Countdown';
    const description =
      'Toyo is a awesome fighting blockchain game empowered by Polygon and a lovely team 😎';
    const chain = 'MATIC';
    const symbol = 'TOY';
    const image = 'https://averylongurl.com/image/contract/2917';
    const externalUrl = 'https://en.wikipedia.org/wiki/Space_Chickens_in_Space';
    const media = [
      {
        type: 'image',
        value:
          'https://dg31sz3gwrwan.cloudfront.net/fanart/355763/1357791-0-q80.jpg',
      },
    ];

    const dto = {
      name: name,
      description: description,
      chain: chain,
      symbol: symbol,
      image: image,
      externalUrl: externalUrl,
      media: media,
    };

    return await contractService.createContract(dto).then((contract) => {
      expect(contract).toEqual({
        name: expect.stringMatching('Toyo'),
        description: expect.any(String),
        externalUrl: expect.any(String),
        confirmed: expect.any(Boolean),
        id: expect.any(Number),
        secretType: expect.any(String),
        symbol: expect.stringMatching('TOY'),
        external_link: expect.any(String),
        image: expect.any(String),
        media: expect.arrayContaining([
          expect.objectContaining({
            type: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        transactionHash: expect.any(String),
      });
    });
  }, 15000); */
});
