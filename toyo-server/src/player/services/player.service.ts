/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from '../entities/player.entity';
import { PlayerRepository } from '../repositories/player.repository';
import { SavePlayerDto } from '../dto/save-player.dto';
import { EditPlayerDto } from '../dto/edit-player.dto';
import { v4 as uuidv4 } from 'uuid';
import { WalletService } from '../../wallet/services/wallet.service';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: PlayerRepository,
    private playerService: PlayerService,
    private walletService: WalletService,
  ) {}

  public async save(savePlayerDto: SavePlayerDto): Promise<Player> {
    return await this.playerRepository.savePlayer(savePlayerDto);
  }

  public async getAll(): Promise<Player[]> {
    return await this.playerRepository.find();
  }

  public async getByIndex(index: number): Promise<Player> {
    const player = await this.playerRepository
      .findOneOrFail(index)
      .then((player) => {
        console.log('🔧  Player found...');
        return player;
      })
      .catch((error) => {
        console.log(`🔧 Player not found...`, error);
      });

    return player! as Player;
  }

  public async editByIndex(
    index: number,
    editPlayerDto: EditPlayerDto,
  ): Promise<Player> {
    const targetPlayer = await this.playerRepository
      .findOneOrFail(index)
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

  public async deleteByIndex(index: number): Promise<void> {
    await this.playerRepository.delete(index);
  }

  public async checkIfAdminExists(): Promise<boolean> {
    const admin = await this.getByIndex(0);

    if (admin.role === 1) {
      return true;
    }
    return false;
  }

  public async createAdminAccount(pincode: number): Promise<Player> {
    const _pincode = {
      pincode: pincode,
    };
    const uuid = uuidv4();
    const wallet = await this.walletService.createWallet(_pincode);

    const adminDto = {
      playerID: uuid,
      username: 'admin',
      email: 'admin@toyo.com',
      walletAddress: wallet.address,
    } as SavePlayerDto;

    return await this.playerService.save(adminDto);
  }
}
