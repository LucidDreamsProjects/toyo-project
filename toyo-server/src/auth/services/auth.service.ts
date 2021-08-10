import { Player } from '../../player/entities/player.entity';
import { PlayerRepository } from '../../player/repositories/player.repository';
import { SavePlayerDto } from '../../player/dto/save-player.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: PlayerRepository,
    private readonly httpService: HttpService,
  ) {}

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
    console.log(json);

    return json;
    // return response.pipe(map((response) => response.data));
  }
}
