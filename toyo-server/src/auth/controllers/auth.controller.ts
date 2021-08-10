import { Controller, Post, Body } from '@nestjs/common';
import { SaveAuthDto } from '../dto/save-auth.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('validate')
  public async getBearerToken(@Body() saveAuthDto: SaveAuthDto): Promise<any> {
    const bearerToken = await this.authService.getBearerToken();
    return bearerToken;
  }
}
