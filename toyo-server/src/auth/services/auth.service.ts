import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { config } from 'dotenv';
import axios from 'axios';

config();

@Injectable()
export class AuthService {
  private readonly DATA_URL =
    'https://login.arkane.network/auth/realms/Arkane/protocol/openid-connect/token';
  private readonly GRANT_TYPE = `${process.env.GRANT_TYPE}`;
  private readonly CLIENT_ID = `${process.env.VENLY_ID}`;
  private readonly CLIENT_SECRET = `${process.env.VENLY_SECRET}`;

  public async getBearerToken(): Promise<any> {
    const dto = {
      grant_type: this.GRANT_TYPE,
      client_id: this.CLIENT_ID,
      client_secret: this.CLIENT_SECRET,
    };

    await axios
      .post(this.DATA_URL, new URLSearchParams(dto))
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }
}
