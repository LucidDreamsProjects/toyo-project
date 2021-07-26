import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { PlayerUserInput } from '../dto/player-user.input';
import { PlayerUserService } from '../services/player-user.service';

@Controller('playerUser')
export class PlayerUserController {
  constructor(private readonly playerUserService: PlayerUserService) {}

  @Get()
  isAuth(playerUser: PlayerUserInput) {
    return this.playerUserService.isAuth(playerUser);
  }

  @Post()
  auth(playerUser: PlayerUserInput) {
    return this.playerUserService.auth(playerUser);
  }

  @Post()
  create(@Body() createPlayerUser: PlayerUserInput) {
    return this.playerUserService.create(createPlayerUser);
  }

  /* @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  } */

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlayerUserInput: PlayerUserInput,
  ) {
    return `This action updates a #${id} playerUser`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
