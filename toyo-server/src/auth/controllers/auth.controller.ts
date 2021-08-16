import { Controller, Get, HttpCode } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Get('validate')
  public async getBearerToken(): Promise<any> {
    return await this.authService.getBearerToken();
  }
}
