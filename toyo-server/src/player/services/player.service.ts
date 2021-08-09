/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerRepository } from '../repositories/player.repository';
import { Player } from '../entities/player.entity';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { EditPlayerDto } from '../dto/edit-player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerRepository)
    private playerRepository: PlayerRepository,
  ) {}

  public async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    console.log("🔧 Creating a new Player on Toyo's universe...");
    return await this.playerRepository.createPlayer(createPlayerDto);
  }

  public async getPlayers(): Promise<Player[]> {
    console.log("🔧 Returning all Players from Toyo's universe...");
    return await this.playerRepository.find();
  }

  public async getPlayerById(playerId: number): Promise<Player> {
    console.log("🔧 Searching for Player (by Id) in Toyo's universe...");
    const foundPlayer = await this.playerRepository.findOne(playerId);

    if (!foundPlayer) {
      throw new NotFoundException(`🔧 Player not found in Toyo's universe.`);
    }
    return foundPlayer;
  }

  public async editPlayer(
    playerId: number,
    editPlayerDto: EditPlayerDto,
  ): Promise<Player> {
    console.log("🔧 Updating Player (by Id) from Toyo's universe...");
    const editedPlayer = await this.playerRepository.findOne(playerId);

    if (!editedPlayer) {
      throw new NotFoundException(`🔧 Player not found in Toyo's universe.`);
    }
    return this.playerRepository.editPlayer(editPlayerDto, editedPlayer);
  }

  public async deletePlayer(playerId: number): Promise<void> {
    console.log("🔧 Deleting Player (by Id) from Toyo's universe...");
    await this.playerRepository.delete(playerId);
  }
}
