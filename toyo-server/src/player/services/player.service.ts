/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from '../entities/player.entity';
import { PlayerRepository } from '../repositories/player.repository';
import { SavePlayerDto } from '../dto/save-player.dto';
import { EditPlayerDto } from '../dto/edit-player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: PlayerRepository,
  ) {}

  public async save(savePlayerDto: SavePlayerDto): Promise<Player> {
    // console.log("🔧 Creating a new Player on Toyo's universe...");
    return await this.playerRepository.savePlayer(savePlayerDto);
  }

  public async getAll(): Promise<Player[]> {
    // console.log("🔧 Returning all Players from Toyo's universe...");
    return await this.playerRepository.find();
  }

  public async getById(playerID: string): Promise<Player> {
    // console.log("🔧 Searching for Player (by Id) in Toyo's universe...");
    const foundPlayer = await this.playerRepository.findOneOrFail(playerID);

    if (!foundPlayer) {
      throw new NotFoundException(`🔧 Player not found in Toyo's universe.`);
    }
    return foundPlayer;
  }

  public async editById(
    playerID: string,
    editPlayerDto: EditPlayerDto,
  ): Promise<Player> {
    // console.log("🔧 Updating Player (by Id) from Toyo's universe...");
    const targetPlayer = await this.playerRepository
      .findOneOrFail(playerID)
      .catch((reason) => reason);

    if (!targetPlayer) {
      throw new NotFoundException(`🔧 Player not found in Toyo's universe.`);
    }
    const updatedPlayer = this.playerRepository.editPlayer(
      editPlayerDto,
      targetPlayer,
    );

    return updatedPlayer;
  }

  public async deleteById(playerID: string): Promise<void> {
    // console.log("🔧 Deleting Player (by Id) from Toyo's universe...");
    await this.playerRepository.delete(playerID);
  }
}
