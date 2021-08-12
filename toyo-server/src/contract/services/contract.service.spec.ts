import { Test, TestingModule } from '@nestjs/testing';
import { ContractService } from './contract.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { EthereumAddress } from 'wallet.ts';

describe('ContractService', () => {
  //TODO: Create Entity on Database
  let contractService: ContractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.register({
          timeout: 5000,
          maxRedirects: 5,
        }),
      ],
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

    return (await contractService.createContract(dto)).pipe(
      map((axiosResponse: AxiosResponse) => {
        expect(axiosResponse).toBe({
          name: expect.stringMatching('Toyo'),
          description: expect.any(String),
          chain: expect.stringMatching('MATIC'),
          symbol: expect.stringMatching('TOYO'),
          image: expect.any(String),
          externalUrl: expect.any(String),
          transactionHash: expect.any(String),
        });
      }),
    );
  });
});
