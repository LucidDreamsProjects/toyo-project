import { Test, TestingModule } from '@nestjs/testing';
import { PlayerRepository } from './player.repository';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Player } from '../entities/player.entity';
import { SavePlayerDto } from '../dto/save-player.dto';
import { v4 as uuidv4 } from 'uuid';
import { EthereumAddress } from 'wallet.ts';
import { haiku } from '../../utils/haiku';

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
          host: '162.240.6.22',
          port: 3306,
          username: 'wwtoyo_admin',
          password: 'dd^8A!DPq#ZpjewF2',
          database: 'wwtoyo_universe',
          entities: [Player],
          logging: true,
          synchronize: false,
          autoLoadEntities: true,
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
    const playerDto: SavePlayerDto = {
      playerID: uuidv4(),
      username: haiku(1),
      email: haiku(2),
      walletAddress: EthereumAddress.from(testKey).address,
    };

    const savedPlayer = await playerRepository.save(playerDto);

    expect(savedPlayer).toBe(playerDto);
  });

  it('should not save an entity and throw error if id missing', async () => {
    const playerEntity: Player = {} as Player;
    return playerRepository.save(playerEntity).catch((error) => expect(error));
  });
});
