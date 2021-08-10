import { Test, TestingModule } from '@nestjs/testing';

describe('NftService', () => {
  const mockPlayerRepository = {
    createNftTemplate: jest.fn((dto) => {
      Promise.resolve({
        name: "Chuck The Rooster",
        description: "Chuck the youngest of the three.",
        image: "https://static.wikia.nocookie.net/parody/images/4/42/74915084_10162764640400387_6139958579186106368_o.jpg",
        externalUrl: "https://en.wikipedia.org/wiki/Space_Chickens_in_Space",
        backgroundColor: "#FFFFFF",
        fungible: false,
      }),
    }),
  };
});
