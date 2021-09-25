import { Test, TestingModule } from '@nestjs/testing';
import { TokenController } from './token.controller';
import { TokenService } from '../services/token.service';
import { EthereumAddress } from 'wallet.ts';
import { config } from 'dotenv';

config();

const testKey = Buffer.from(
  '028a8c59fa27d1e0f1643081ff80c3cf0392902acbf76ab0dc9c414b8d115b0ab3',
  'hex',
);

describe('TokenController', () => {
  let tokenController: TokenController;

  const mockTokenService = {
    mintToken: jest.fn(async (dto) => {
      return await {
        id: 51,
        confirmed: true,
        name: 'G-Token',
        description: 'Simply, a key to an object in the Toyo universe.',
        fungible: false,
        burnable: true,
        externalUrl: 'https://en.wikipedia.org/wiki/Space_Chickens_in_Space',
        backgroundColor: '#FFFFFF',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/6/60/Solex_99_30_padlock_with_keys_%28DSCF2659%29.jpg',
        imageThumbnail:
          'https://static.wikia.nocookie.net/parody/images/4/42/74915084_10162764640400387_6139958579186106368_o.jpg',
        imagePreview:
          'https://static.wikia.nocookie.net/parody/images/4/42/74915084_10162764640400387_6139958579186106368_o.jpg',
        maxSupply: 25,
        currentSupply: 0,
        animationUrls: [
          {
            type: 'video',
            value: 'http://img.arkane.network/chuck_trailer.mp4',
          },
          {
            type: 'audio',
            value: 'http://img.arkane.network/chuck_soundtrack.mp3',
          },
        ],
        attributes: [
          {
            type: 'property',
            name: 'Type',
            value: 'Generic',
          },
        ],
        transactionHash: EthereumAddress.from(testKey).address,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenController],
      providers: [TokenService],
    })
      .overrideProvider(TokenService)
      .useValue(mockTokenService)
      .compile();

    tokenController = module.get<TokenController>(TokenController);
  });

  it('should be defined', () => {
    expect(tokenController).toBeDefined();
  });

  it('should create a nft template and return that', async () => {
    const typeId = 1;
    const quantity = 1;
    const address = 'd5c001b1-eead-475e-baac-43219c14156e';

    const dto = {
      typeId: typeId,
      wallet: address,
      quantity: quantity,
    };

    return await tokenController.mintToken(dto).then((response) => {
      expect(response).toEqual({
        id: expect.any(Number),
        confirmed: expect.any(Boolean),
        name: expect.any(String),
        description: expect.any(String),
        fungible: expect.any(Boolean),
        burnable: expect.any(Boolean),
        externalUrl: expect.any(String),
        backgroundColor: expect.any(String),
        image: expect.any(String),
        imageThumbnail: expect.any(String),
        imagePreview: expect.any(String),
        maxSupply: expect.any(Number),
        currentSupply: expect.any(Number),
        animationUrls: expect.arrayContaining([
          expect.objectContaining({
            type: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        attributes: expect.arrayContaining([
          expect.objectContaining({
            type: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        transactionHash: expect.any(String),
      });
    });
  }, 15000);
});
