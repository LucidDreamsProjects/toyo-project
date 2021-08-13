import { Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('validate')
  //* Returning Observable object containing 'operator' and 'source'
  public async getBearerToken(): Promise<any> {
    return await this.authService.getBearerToken();
  }
}
