import { Controller, Get, Post, Put } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  isAuth() {
    console.log('✔️ yep, hit auth controller...');
    return this.authService.isAuth();
  }

  @Post()
  auth() {
    console.log('✔️ yep, hit auth controller...');
    return this.authService.auth();
  }
}
