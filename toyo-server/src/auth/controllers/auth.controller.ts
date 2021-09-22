import { Post, Param } from '@nestjs/common';
import { Controller, HttpCode } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post()
  public async getBearerToken(): Promise<string | void> {
    return await this.authService.getAccessToken();
  }

  @HttpCode(200)
  @Post('recaptcha/:token')
  public async validateHuman(
    @Param('token') token: string,
  ): Promise<boolean | void> {
    // console.log('CONTROLLER: ', token);
    return await this.authService.validateHuman(token);
  }
}
