import { Test, TestingModule } from '@nestjs/testing';
import { ContractService } from './contract.service';

describe('ContractService', () => {
  //TODO: Create Entity on Database
  let contractService: ContractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractService],
    }).compile();

    contractService = await module.get<ContractService>(ContractService);
  });

  it('should be defined', () => {
    expect(contractService).toBeDefined();
  });

  it('should create a contract and return that', async () => {
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

    return await contractService.createContract(dto).then((response) => {
      expect(response).toEqual({
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
    });
  });
});
