import { Injectable } from '@nestjs/common';
import { CreatePlayerUserInput } from './dto/create-player-user.input';
import { UpdatePlayerUserInput } from './dto/update-player-user.input';

@Injectable()
export class PlayerUsersService {
  create(createPlayerUserInput: CreatePlayerUserInput) {
    return 'This action adds a new playerUser';
  }

  findAll() {
    return `This action returns all playerUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerUser`;
  }

  update(id: number, updatePlayerUserInput: UpdatePlayerUserInput) {
    return `This action updates a #${id} playerUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerUser`;
  }
}
