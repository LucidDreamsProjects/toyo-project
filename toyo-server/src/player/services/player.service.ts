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

  public async save(savePlayerDto: SavePlayerDto): Promise<Player | void> {
    const player = await this.playerRepository.savePlayer(savePlayerDto);

    if (player) {
      return player;
    }
  }

  public async getAll(): Promise<Player[] | void> {
    const players = await this.playerRepository.find();

    if (players) {
      return players;
    }
  }

  public async getByIndex(index: number): Promise<Player | undefined> {
    const player = await this.playerRepository.findOneOrFail(index);

    if (player) {
      return player;
    }
  }

  public async editByIndex(
    index: number,
    editPlayerDto: EditPlayerDto,
  ): Promise<Player | void> {
    const targetPlayer = await this.playerRepository.findOneOrFail(index);

    if (!targetPlayer) {
      throw new NotFoundException(`🔧 Player not found in Toyo's universe.`);
    }

    const updatedPlayer = await this.playerRepository.editPlayer(
      editPlayerDto,
      targetPlayer,
    );

    if (updatedPlayer) {
      return updatedPlayer;
    }
  }

  public async deleteByIndex(index: number): Promise<void> {
    await this.playerRepository.delete(index);
  }

  public async checkIfAdminExists(): Promise<boolean> {
    const admin = await this.getByIndex(1000);

    if (admin) {
      if (admin.role === 1) {
        return true;
      }
    }

    return false;
  }
}
