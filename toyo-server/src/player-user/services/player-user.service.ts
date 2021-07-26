/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerUserRepository } from '../entities/player-user.entity';
import { PlayerUserInput } from '../dto/player-user.input';

@Injectable()
export class PlayerUserService {
  constructor(
    @InjectRepository(PlayerUserRepository)
    private playerUserRepository: Repository<PlayerUserRepository>,
  ) {}

  create(playerUser: PlayerUserInput) {
    console.log('🔧 Receiving data for new Player...');
    return 'This action adds a new playerUser';
  }

  findAll() {
    console.log('🔧 Searching for all Players...');
    return `This action returns all playerUsers`;
  }

  findOne(id: number) {
    console.log('🔧 Search for unique Player...');
    return `This action returns a #${id} playerUser`;
  }

  update(id: number, playerUser: PlayerUserInput) {
    console.log('🔧 Updating Player #ID...');
    return `This action updates a #${id} playerUser`;
  }

  remove(id: number) {
    console.log('🔧 Deleting Player #ID...');
    return `This action removes a #${id} playerUser`;
  }
}
