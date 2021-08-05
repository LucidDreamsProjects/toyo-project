/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import qs from 'qs';
import { ConstructorOptions } from '@arkane-network/arkane-connect/dist/src/connect/connect';
import { ArkaneConnect, WindowMode } from '@arkane-network/arkane-connect';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private httpService: HttpService) {}

  async onModuleInit(): Promise<void> {
    await this.venlyAuth();
  }

  //* Using Venly's Widget API
  //* (Elliot's snippet example)
  public async venlyAuth(): Promise<void> {
    console.log('callind venlyAuth...');
    const options: ConstructorOptions = {
      environment: 'staging',
      windowMode: WindowMode.POPUP,
      bearerTokenProvider: () => '',
      useOverlayWithPopup: true,
    };

    const arkaneConnect = new ArkaneConnect('Testaccount', options);

    arkaneConnect
      .authenticate()
      .then((res) => {
        if (res.isAuthenticated) {
          arkaneConnect.api
            .getWallets()
            .then((wallets) => {
              console.log(
                `The address of the first wallet is: ${wallets[0].address}`,
              );
            })
            .catch((e) => {
              console.log(e);
            });
        }
      })
      .finally(() => {
        arkaneConnect.createSigner(WindowMode.REDIRECT);
      });

    console.log(arkaneConnect.createSigner());

    arkaneConnect.api
      .getProfile()
      .then((profile: { email: any }) => {
        console.log(
          `Users email, ${profile.email}, has been successfully executed!`,
        );
      })
      .catch((e) => {
        console.log(e);
      });

    arkaneConnect.api
      .getWallets()
      .then((wallets) => {
        console.log(
          `The address of the first wallet is: ${wallets[0].address}`,
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }

  //* Using Venly's Postman directly route
  /* public async venlyAuth(): Promise<any> {
    console.log('callind venlyAuth...');
    return await axios
      .post(
        'https://login-staging.arkane.network/auth/realms/Arkane/protocol/openid-connect/token',
        qs.stringify({
          grant_type: 'client_credentials',
          client_id: 'Toyo-capsule',
          client_secret: '11ea7787-d9a1-421a-bdd8-1d6563442343',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(function (response) {
        console.log(response);
      });
  } */
}
