/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerUserRepository } from '../entities/player-user.entity';
import { PlayerUserInput } from '../dto/player-user.input';
import { ArkaneConnect, WindowMode } from '@arkane-network/arkane-connect';

@Injectable()
export class PlayerUserService {
  constructor(
    @InjectRepository(PlayerUserRepository)
    private playerUserRepository: Repository<PlayerUserRepository>,
  ) {}

  isAuth(playerUser: PlayerUserInput) {
    const arkaneConnect = new ArkaneConnect('Testaccount-capsule', {
      environment: 'staging',
      windowMode: 'REDIRECT' as WindowMode,
      bearerTokenProvider: () => process.env.ACCESS_TOKEN!,
    });

    if (!arkaneConnect.checkAuthenticated()) {
      //TODO: encerra sessão => redireciona para outra página
      return false;
    }
    return true;
  }

  auth(playerUser: PlayerUserInput) {
    const arkaneConnect = new ArkaneConnect('Testaccount-capsule', {
      environment: 'staging',
      windowMode: 'REDIRECT' as WindowMode,
      bearerTokenProvider: () => process.env.ACCESS_TOKEN!,
    });

    return arkaneConnect.flows.authenticate({
      windowMode: 'REDIRECT' as WindowMode,
      redirectUri: 'url_user_will_be_redirected',
    });
  }

  create(playerUser: PlayerUserInput) {
    return 'This action adds a new playerUser';
  }

  findAll() {
    return `This action returns all playerUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerUser`;
  }

  update(id: number, playerUser: PlayerUserInput) {
    return `This action updates a #${id} playerUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerUser`;
  }
}
