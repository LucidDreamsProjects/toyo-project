/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArkaneConnect, WindowMode } from '@arkane-network/arkane-connect';
import { PlayerUserRepository } from 'src/player-user/entities/player-user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(PlayerUserRepository)
    private playerUserRepository: Repository<PlayerUserRepository>,
  ) {}

  isAuth() {
    console.log('🔧 check if user is authenticated in Venly Widget API...');

    // start connection with Venly Widget API
    const arkaneConnect = new ArkaneConnect('Testaccount-capsule', {
      environment: 'staging',
      windowMode: 'REDIRECT' as WindowMode,
      bearerTokenProvider: () => process.env.ACCESS_TOKEN!,
    });

    arkaneConnect.api
      .getProfile()
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(arkaneConnect.checkAuthenticated());
  }

  auth() {
    console.log('🔧 starting user authentication with Venly Widget API...');

    // start connection with Venly Widget API
    const arkaneConnect = new ArkaneConnect('Testaccount-capsule', {
      environment: 'staging',
      windowMode: 'REDIRECT' as WindowMode,
      bearerTokenProvider: () => process.env.ACCESS_TOKEN!,
    });

    arkaneConnect.flows.authenticate({ windowMode: 'REDIRECT' as WindowMode });
  }
}
