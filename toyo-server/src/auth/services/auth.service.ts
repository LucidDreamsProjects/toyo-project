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

  public async getCredentials(): Promise<Record<string, string> | void> {
    const url = this.DATA_URL;
    const grantType = this.GRANT_TYPE;
    const clientId = this.CLIENT_ID;
    const clientSecret = this.CLIENT_SECRET;

    const params = new URLSearchParams();
    params.append('grant_type', `${grantType}`);
    params.append('client_id', `${clientId}`);
    params.append('client_secret', `${clientSecret}`);

    return await axios
      .post(url, params.toString())
      .then((response) => {
        // console.log(response.data);
        return response.data;
      })
      .catch((error) => console.log(error));
  }

  public async getAccessToken(): Promise<string | void> {
    const credentials = await this.getCredentials();

    if (credentials) {
      const accessToken = credentials.access_token;
      return accessToken;
    }
  }
}
