import { Test, TestingModule } from '@nestjs/testing';
import { PlayerRepository } from './player.repository';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Player } from '../entities/player.entity';
import { SavePlayerDto } from '../dto/save-player.dto';
import { v4 as uuidv4 } from 'uuid';
import { EthereumAddress } from 'wallet.ts';
import { haiku } from '../../utils/haiku';
import { config } from 'dotenv';

config();

const testKey = Buffer.from(
  '028a8c59fa27d1e0f1643081ff80c3cf0392902acbf76ab0dc9c414b8d115b0ab3',
  'hex',
);

describe('PlayerRepository', () => {
  let playerRepository: PlayerRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql' as any,
          host: `${process.env.TYPEORM_HOST}`,
          port: 3306,
          username: `${process.env.TYPEORM_USERNAME}`,
          password: `${process.env.TYPEORM_PASSWORD}`,
          database: `${process.env.TYPEORM_DATABASE}`,
          entities: [Player],
          logging: false,
          synchronize: false,
          keepConnectionAlive: true,
        }),
        TypeOrmModule.forFeature([Player]),
      ],
      providers: [PlayerRepository],
    }).compile();

    playerRepository = module.get(getRepositoryToken(Player));
  });

  afterEach(async () => {
    await playerRepository.manager.connection.close();
  });

  it('should be defined', () => {
    expect(playerRepository).toBeDefined();
  });

  expect.assertions(1);
  it('should save an entity', async () => {
    const uuid = uuidv4();
    const username = haiku(1);
    const email = haiku(2);

    const playerDto: SavePlayerDto = {
      playerID: uuid,
      username: username,
      email: email,
      walletAddress: EthereumAddress.from(testKey).address,
    };

    const savedPlayer = await playerRepository.save(playerDto);

    expect(savedPlayer).toBe(playerDto);
  });
});
