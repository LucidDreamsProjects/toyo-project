import { Controller, Post, Body } from '@nestjs/common';
import { SavePlayerDto } from '../../player/dto/save-player.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('validate')
  public async getBearerToken(
    @Body() savePlayerDto: SavePlayerDto,
  ): Promise<any> {
    const bearerToken = await this.authService.getBearerToken();
    return bearerToken;
  }
}
