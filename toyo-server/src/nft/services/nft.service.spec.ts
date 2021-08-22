import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../../auth/services/auth.service';
import { NftService } from './nft.service';

describe('NftService', () => {
  let nftService: NftService;
  let authService: AuthService;

  beforeEach(async () => {
    jest.setTimeout(10000);
    const module: TestingModule = await Test.createTestingModule({
      providers: [NftService, AuthService],
    }).compile();

    nftService = await module.get<NftService>(NftService);
    authService = await module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(nftService).toBeDefined();
  });

  it('should create a nft and return that', async () => {
    const name = 'Toyo';
    const description = 'Toyo is a awesome fighting blockchain empowered 😎';
    const image =
      'https://static.wikia.nocookie.net/parody/images/4/42/74915084_10162764640400387_6139958579186106368_o.jpg';
    const externalUrl = 'https://en.wikipedia.org/wiki/Space_Chickens_in_Space';
    const backgroundColor = '#FFFFFF';
    const fungible = false;
    const maxSupply = '25';
    const burnable = true;
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

    return await nftService.createNft(dto).then((response) => {
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
  });
});
