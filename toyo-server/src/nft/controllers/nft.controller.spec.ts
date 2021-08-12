import { Test, TestingModule } from '@nestjs/testing';
import { NftController } from './nft.controller';
import { NftService } from '../services/nft.service';
import { EthereumAddress } from 'wallet.ts';
import { config } from 'dotenv';

config();

const testKey = Buffer.from(
  '028a8c59fa27d1e0f1643081ff80c3cf0392902acbf76ab0dc9c414b8d115b0ab3',
  'hex',
);

describe('NtfController', () => {
  let nftController: NftController;

  const mockNftService = {
    createNft: jest.fn((dto) => {
      return {
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
          {
            type: 'property',
            name: 'Talent',
            value: 'Leadership',
          },
          {
            type: 'boost',
            name: 'Crafting',
            value: '+5',
          },
          {
            type: 'boost',
            name: 'Leadership',
            value: '+10',
          },
          {
            type: 'stat',
            name: 'Cool',
            value: '9',
            maxValue: '10',
          },
          {
            type: 'stat',
            name: 'Cool',
            value: '9',
            maxValue: '10',
          },
        ],
        transactionHash: EthereumAddress.from(testKey).address,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NftController],
      providers: [NftService],
    })
      .overrideProvider(NftService)
      .useValue(mockNftService)
      .compile();

    nftController = module.get<NftController>(NftController);
  });

  it('should be defined', () => {
    expect(nftController).toBeDefined();
  });

  it('should create a nft', async () => {
    const name = 'Chuck The Rooster';
    const description = 'Toyo is a awesome fighting blockchain empowered 😎';
    const image =
      'https://static.wikia.nocookie.net/parody/images/4/42/74915084_10162764640400387_6139958579186106368_o.jpg';
    const externalUrl = 'https://en.wikipedia.org/wiki/Space_Chickens_in_Space';
    const backgroundColor = '#FFFFFF';
    const fungible = false;
    const maxSupply = '100';
    const burnable = false;
    const animationUrls = [
      {
        type: 'video',
        value: 'http://img.arkane.network/chuck_trailer.mp4',
      },
      {
        type: 'audio',
        value: 'http://img.arkane.network/chuck_soundtrack.mp3',
      },
    ];
    const attributes = [
      {
        type: 'property',
        name: 'Talent',
        value: 'Leadership',
      },
      {
        type: 'property',
        name: 'Allergic',
        value: 'Monstonuts',
      },
      {
        type: 'property',
        name: 'Hobby',
        value: 'Scouts',
      },
      {
        type: 'stat',
        name: 'Hobby',
        value: 'Scouts',
      },
      {
        type: 'stat',
        name: 'Age',
        value: '3',
      },
      {
        type: 'stat',
        name: 'Cool',
        value: '9',
        maxValue: '10',
      },
      {
        type: 'boost',
        name: 'Crafting',
        value: '+5',
      },
      {
        type: 'boost',
        name: 'Leadership',
        value: '+10',
      },
    ];

    const dto = {
      name: name,
      description: description,
      image: image,
      externalUrl: externalUrl,
      backgroundColor: backgroundColor,
      fungible: fungible,
      maxSupply: maxSupply,
      burnable: burnable,
      animationUrls: animationUrls,
      attributes: attributes,
    };

    expect.assertions(2);
    return nftController.createNft(dto).then((data) => {
      expect(data).toEqual({
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
      expect(mockNftService.createNft).toBeCalled();
    });
  });
});
