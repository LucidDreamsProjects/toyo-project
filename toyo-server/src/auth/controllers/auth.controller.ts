import {
  Controller,
  Get,
  HttpCode,
  Res,
  Req,
  Request,
  Response,
} from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Get('validate')
  public async getBearerToken(): Promise<Observable<AxiosResponse<any>>> {
    return await this.authService.getBearerToken();
  }
}
