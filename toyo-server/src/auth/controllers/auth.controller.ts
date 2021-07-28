import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { Redirect } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req: Request) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  @Redirect('http://localhost:3000')
  googleAuthRedirect(@Req() req: Request) {
    return this.authService.googleLogin(req);
  }
}
