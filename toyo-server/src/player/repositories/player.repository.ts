import { Repository, EntityRepository } from 'typeorm';
import { Player } from '../entities/player.entity';
import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';

@Injectable()
@EntityRepository(Player)
export class PlayerRepository extends Repository<Player> {
  public async findAll(): Promise<Player[]> {
    return await this.find();
  }

  public async findById(playerId: string): Promise<Player | undefined> {
    const player = await this.findOne(playerId);

    if (player) {
      console.log(player);
    }

    return player;
  }

  public async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const { playerId, firstName, lastName, email, walletId, balance } =
      createPlayerDto;

    const player = new Player();
    player.playerId = playerId;
    // player.username = username;
    player.firstName = firstName;
    player.lastName = lastName;
    player.email = email;
    player.walletId = walletId;
    player.balance = balance;

    await this.save(player);
    return player;
  }

  public async editPlayer(
    playerId: string,
    updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player | undefined> {
    const { username, firstName, lastName, email } = updatePlayerDto;
    const player = await this.findOne(playerId);

    if (player) {
      player.username = username;
      player.firstName = firstName;
      player.lastName = lastName;
      player.email = email;
      await this.save(player);

      return player;
    }
  }

  public async destroy(playerId: string): Promise<void> {
    const player = await this.findOne(playerId);

    if (player) {
      await this.remove(player);
    }
  }
}
