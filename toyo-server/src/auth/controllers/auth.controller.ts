import { Request } from 'express';
import { AuthService } from '../services/auth.service';
import { Controller, Get, Req } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
