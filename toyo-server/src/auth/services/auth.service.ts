/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ArkaneConnect, WindowMode } from '@arkane-network/arkane-connect';
import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';

config();

@Injectable()
export class AuthService {
  arkaneConnect = new ArkaneConnect('Testaccount-capsule', {
    environment: 'staging',
    windowMode: 'POPUP' as WindowMode,
    bearerTokenProvider: () => `${process.env.VENLY_ACCESS_TOKEN}`,
  });

  async venlyLogin(req: any) {
    console.log(this.arkaneConnect);

    this.arkaneConnect.flows.authenticate({
      redirectUri: 'http://localhost:3000',
      windowMode: 'POPUP' as WindowMode,
    });
  }

  async venlyLogout(req: any) {
    this.arkaneConnect.logout({
      windowMode: 'POPUP' as WindowMode,
      redirectUri: 'http://localhost:3000',
    });
  }

  async venlyValidate(req: any) {
    console.log(this.arkaneConnect);
    this.arkaneConnect.checkAuthenticated();
  }

  async venlyRefresh(req: any) {
    this.arkaneConnect.addOnTokenRefreshCallback((token) => {
      console.log('Refreshed bearer token: ' + token);
    });
  }
}
