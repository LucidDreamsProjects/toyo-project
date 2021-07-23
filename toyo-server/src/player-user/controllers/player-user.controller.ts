import { Controller, Get, Post } from '@nestjs/common';

@Controller('playerUsers')
export class PlayerUserController {
  @Post()
  create(): string {
    return 'This action adds a new playerUser';
  }

  @Get()
  findAll(): string {
    return 'This action returns all playerUsers';
  }
}
