/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@nestjs/common';
import { ArkaneConnect, WindowMode } from '@arkane-network/arkane-connect';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getArkaneConnection(): void {
    const arkaneConnect = new ArkaneConnect('Testaccount-capsule', {
      environment: 'staging',
      windowMode: 'REDIRECT'! as WindowMode,
      bearerTokenProvider: () => process.env.ACCESS_TOKEN!,
    });

    console.log(arkaneConnect);
  }

  refreshAcessToken(): void {
    const arkaneConnect = new ArkaneConnect('Testaccount-capsule', {
      environment: 'staging',
      windowMode: 'REDIRECT'! as WindowMode,
      bearerTokenProvider: () => process.env.ACCESS_TOKEN!,
    });

    arkaneConnect.addOnTokenRefreshCallback((token) => {
      console.log(token);
      //? será que é possível?
      process.env.ACCESS_TOKEN = token;
    });
  }
}
