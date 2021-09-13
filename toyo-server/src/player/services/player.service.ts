/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from '../entities/player.entity';
import { PlayerRepository } from '../repositories/player.repository';
import { SavePlayerDto } from '../dto/save-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerRepository)
    private playerRepository: PlayerRepository,
  ) {}

  public async savePlayer(savePlayerDto: SavePlayerDto): Promise<Player> {
    return await this.playerRepository.savePlayer(savePlayerDto);
  }

  public async findAll(): Promise<Player[]> {
    return await this.playerRepository.findAll();
  }

  public async findOne(playerId: string): Promise<Player> {
    const player = await this.playerRepository.findOne(playerId);

    if (!player) {
      throw new NotFoundException(`Player not found`);
    }

    return player;
  }

  public async update(
    playerId: string,
    updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player | undefined> {
    const player = await this.playerRepository.findOne(playerId);

    if (!player) {
      throw new NotFoundException(`Player not found`);
    }

    const updatedPlayer = await this.playerRepository.editPlayer(
      playerId,
      updatePlayerDto,
    );
    return updatedPlayer;
  }

  public async remove(playerId: string): Promise<void> {
    await this.playerRepository.delete(playerId);
  }
}
