import { Repository, EntityRepository } from 'typeorm';
import { Player } from '../entities/player.entity';
import { Injectable } from '@nestjs/common';
import { SavePlayerDto } from '../dto/save-player.dto';
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

  public async savePlayer(savePlayerDto: SavePlayerDto): Promise<Player> {
    const { playerId, firstName, lastName, email, wallets } = savePlayerDto;

    const player = new Player();
    player.playerId = playerId;
    // player.username = username;
    player.firstName = firstName;
    player.lastName = lastName;
    player.email = email;
    player.wallets = JSON.stringify(wallets);

    console.log('================ player wallets', player.wallets);

    console.log(this);

    console.log(this.save);

    await this.save(player);
    return player;
  }

  public async editPlayer(
    playerId: string,
    updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player | undefined> {
    const { username, firstName, lastName, email, wallets } = updatePlayerDto;
    const player = await this.findOne(playerId);

    if (player) {
      player.username = username;
      player.firstName = firstName;
      player.lastName = lastName;
      player.email = email;
      player.wallets = wallets;
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
