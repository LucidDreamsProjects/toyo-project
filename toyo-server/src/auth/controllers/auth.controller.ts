import { Request } from 'express';
import { AuthService } from '../services/auth.service';
import { Controller, Get, Req } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  venlyAuthLogin(@Req() req: Request) {
    return this.authService.venlyLogin(req);
  }

  @Get('logout')
  venlyAuthLogout(@Req() req: Request) {
    return this.authService.venlyLogout(req);
  }

  @Get('validate')
  venlyAuthValidate(@Req() req: Request) {
    return this.authService.venlyValidate(req);
  }

  @Get('refresh')
  venlyAuthRefresh(@Req() req: Request) {
    return this.authService.venlyRefresh(req);
  }
}
