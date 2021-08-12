import { Test, TestingModule } from '@nestjs/testing';
import { ContractController } from './contract.controller';
import { ContractService } from '../services/contract.service';
import { EthereumAddress } from 'wallet.ts';
import { config } from 'dotenv';

config();

const testKey = Buffer.from(
  '028a8c59fa27d1e0f1643081ff80c3cf0392902acbf76ab0dc9c414b8d115b0ab3',
  'hex',
);

describe('ContractController', () => {
  let contractController: ContractController;

  const mockContractService = {
    createContract: jest.fn((dto) => {
      return {
        name: 'Toyo',
        description: 'Toyo is a awesome fighting blockchain empowered 😎',
        confirmed: true,
        id: 203,
        secretType: 'MATIC',
        symbol: 'TOYO',
        externalUrl: 'https://en.wikipedia.org/wiki/Space_Chickens_in_Space',
        image: 'https://averylongurl.com/image/contract/2917',
        media: [
          {
            type: 'image',
            value:
              'https://dg31sz3gwrwan.cloudfront.net/fanart/355763/1357791-0-q80.jpg',
          },
        ],
        transactionHash: EthereumAddress.from(testKey).address,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContractController],
      providers: [ContractService],
    })
      .overrideProvider(ContractService)
      .useValue(mockContractService)
      .compile();

    contractController = module.get<ContractController>(ContractController);
  });

  it('should be defined', () => {
    expect(contractController).toBeDefined();
  });

  it('should create a contract', async () => {
    const name = 'Toyo';
    const description = 'Toyo is a awesome fighting blockchain empowered 😎';
    const chain = 'MATIC';
    const symbol = 'TOYO';
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

    expect.assertions(2);
    return contractController.createContract(dto).then((data) => {
      expect(data).toEqual({
        name: expect.stringMatching('Toyo'),
        description: expect.any(String),
        confirmed: expect.any(Boolean),
        id: expect.any(Number),
        secretType: expect.any(String),
        symbol: expect.stringMatching('TOYO'),
        externalUrl: expect.any(String),
        image: expect.any(String),
        media: expect.arrayContaining([
          expect.objectContaining({
            type: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        transactionHash: expect.any(String),
      });
      expect(mockContractService.createContract).toBeCalled();
    });
  });
});
