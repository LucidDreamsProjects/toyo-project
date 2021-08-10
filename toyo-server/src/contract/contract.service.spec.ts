import { Test, TestingModule } from '@nestjs/testing';

describe('it should create a contract', async () => {
  let contractService: ContractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractService],
    }).compile();

    contractService = await module.get<ContractService>(ContractService);
  });

  it('should be defiend', () => {
    expect(contractService).toBeDefined();
  });

  it('should create a new contract and return that', async () => {
    const grantType = process.env.GRANT_TYPE;
    const clientID = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;

    const dto = {
      grant_type: grantType,
      client_id: clientID,
      client_secret: clientSecret,
    };

    expect.assertions(1);
    return contractService.save(dto).then((data) => {
      expect(data).toBe({
        id: expect.any(Number),
        name: expect.any(String),
        confirmed: expect.any(Boolean),
        secretType: expect.stringMatching('MATIC'),
      });
    });
  });
});
