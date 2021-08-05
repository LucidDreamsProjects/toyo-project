/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import qs from 'qs';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private httpService: HttpService) {}

  onModuleInit() {
    this.venlyAuth();
  }

  //* Using Venly's Postman directly route
  public async venlyAuth(): Promise<any> {
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
  }
}
