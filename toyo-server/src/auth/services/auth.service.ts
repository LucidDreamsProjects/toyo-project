import { SavePlayerDto } from '../../player/dto/save-player.dto';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  public async getBearerToken(): Promise<Observable<AxiosResponse<any>>> {
    const payload = await this.httpService.post(
      `https://login.arkane.network/auth/realms/Arkane/protocol/openid-connect/token`,
      {
        grant_type: `${process.env.GRANT_TYPE}`,
        client_id: `${process.env.VENLY_ID}`,
        client_secret: `${process.env.VENLY_SECRET}`,
      },
    );

    const json = payload.pipe(map((response) => response.data));
    return json;
  }
}
