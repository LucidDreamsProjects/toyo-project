/* eslint-disable @typescript-eslint/no-non-null-assertion */
import qs from 'qs';
import { Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { ArkaneConnect, WindowMode } from '@arkane-network/arkane-connect';
import { ConstructorOptions } from '@arkane-network/arkane-connect/dist/src/connect/connect';

@Injectable()
export class AppService {
  public async authWidget(): Promise<
    Observable<AxiosResponse<void>> | undefined
  > {
    console.log('👷 Initializing (NestJS) Widget API service...');
    const options: ConstructorOptions = {
      environment: 'staging',
      windowMode: 'POPUP' as WindowMode,
      bearerTokenProvider: () => '',
      useOverlayWithPopup: true,
    };

    const arkaneConnect = new ArkaneConnect('Toyo-capsule', options);

    await arkaneConnect.authenticate().then((res) => {
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
    });

    await arkaneConnect.api
      .getProfile()
      .then((profile: { email: any }) => {
        console.log(
          `Users email, ${profile.email}, has been successfully executed!`,
        );
      })
      .catch((e) => {
        console.log(e);
      });

    return;
  }

  //* Using Venly's Postman directly route
  public async authPostman(): Promise<void> {
    console.log('👷 initializing (NestJS) Postman service...');
    await axios
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
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
