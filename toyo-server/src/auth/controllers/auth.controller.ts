import { Post } from '@nestjs/common';
import { Controller, HttpCode } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('validate')
  public async getBearerToken(): Promise<string | void> {
    return await this.authService.getAccessToken();
  }
}
