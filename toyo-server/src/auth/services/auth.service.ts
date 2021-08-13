import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { config } from 'dotenv';

config();

@Injectable()
export class AuthService {
  private readonly DATA_URL =
    'https://login.arkane.network/auth/realms/Arkane/protocol/openid-connect/token';
  private readonly GRANT_TYPE = process.env.GRAT_TYPE;
  private readonly CLIENT_ID = process.env.VENLY_ID;
  private readonly CLIENT_SECRET = process.env.VENLY_SECRET;

  constructor(private readonly http: HttpService) {}

  //* this simply version do not returns a Obervable as expected by AxiosResponse class...
  /* public async getBearerToken(): Promise<Record<string, string>> {
    const value = await this.http.post(this.DATA_URL, {
      grant_type: this.GRANT_TYPE,
      client_id: this.CLIENT_ID,
      client_secret: this.CLIENT_SECRET,
    });

    console.log(value);
    return value;
  } */

  //* Some syntax error
  /* public async getBearerToken(): Observable<Array<Record<string, string>>> {
    return this.http.post(this.DATA_URL).pipe(
      map((axiosResponse: AxiosResponse) => {
        return axiosResponse.data;
      }),
    );
  } */

  //* Returning Observable object containing 'operator' and 'source'
  public async getBearerToken(): Promise<Observable<any>> {
    const dto = {
      grant_type: this.GRANT_TYPE,
      client_id: this.CLIENT_ID,
      client_secret: this.CLIENT_SECRET,
    };

    const params = JSON.stringify(dto);

    return await this.http
      .post(this.DATA_URL, params, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        map((res) => {
          console.log(res.data);
          return res.data;
        }),
      );
  }
}
