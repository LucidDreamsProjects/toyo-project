/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArkaneConnect, WindowMode } from '@arkane-network/arkane-connect';
import { PlayerRepository } from 'src/player/entities/player.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(PlayerRepository)
    private playerRepository: Repository<PlayerRepository>,
  ) {}

  isAuth() {
    console.log('🔧 check if user is authenticated in Venly Widget API...');

    // start connection with Venly Widget API
    const arkaneConnect = new ArkaneConnect('Testaccount-capsule', {
      environment: 'staging',
      windowMode: 'REDIRECT' as WindowMode,
      bearerTokenProvider: () => process.env.ACCESS_TOKEN!,
    });

    arkaneConnect.checkAuthenticated();
  }

  auth() {
    console.log('🔧 starting user authentication with Venly Widget API...');

    // start authentication flow

    // start connection with Venly Widget API
    const arkaneConnect = new ArkaneConnect('Testaccount-capsule', {
      environment: 'staging',
      windowMode: 'REDIRECT' as WindowMode,
      bearerTokenProvider: () => process.env.ACCESS_TOKEN!,
    });

    arkaneConnect.flows.authenticate({ windowMode: 'REDIRECT' as WindowMode });
  }
}
