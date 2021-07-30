/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerRepository } from '../entities/player.entity';
import { PlayerInput } from '../dto/player.input';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerRepository)
    private playerRepository: Repository<PlayerRepository>,
  ) {}

  create(player: PlayerInput) {
    console.log('🔧 Receiving data for new Player...');
    return 'This action adds a new player';
  }

  findAll() {
    console.log('🔧 Searching for all Players...');
    return `This action returns all player`;
  }

  async findOne(token: string) {
    console.log('🔧 Search for unique Player...');
    return this.playerRepository.findOne();
  }

  update(id: number, player: PlayerInput) {
    console.log('🔧 Updating Player #ID...');
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    console.log('🔧 Deleting Player #ID...');
    return `This action removes a #${id} player`;
  }
}
