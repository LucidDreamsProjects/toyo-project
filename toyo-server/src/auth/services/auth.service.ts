import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';

config();

@Injectable()
export class AuthService {
  private readonly DATA_URL = `${process.env.AUTHENTICATION_ENDPOINT}/auth/realms/Arkane/protocol/openid-connect/token`;
  private readonly GRANT_TYPE = `${process.env.GRANT_TYPE}`;
  private readonly CLIENT_ID = `${process.env.VENLY_ID}`;
  private readonly CLIENT_SECRET = `${process.env.VENLY_SECRET}`;

  public async getBearerToken(): Promise<any> {
    const url = this.DATA_URL;
    const grant_type = this.GRANT_TYPE;
    const client_id = this.CLIENT_ID;
    const client_secret = this.CLIENT_SECRET;

    const params = new URLSearchParams();
    params.append('grant_type', `${grant_type}`);
    params.append('client_id', `${client_id}`);
    params.append('client_secret', `${client_secret}`);

    return await axios
      .post(url, params.toString())
      .then((response) => {
        // console.log(response.data);
        return response.data;
      })
      .catch((error) => console.log(error));
  }
}
