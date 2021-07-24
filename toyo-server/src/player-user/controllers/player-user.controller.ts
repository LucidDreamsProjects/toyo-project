import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatePlayerUserInput } from '../dto/create-player-user.input';
import { UpdatePlayerUserInput } from '../dto/update-player-user.input';
import { PlayerUserService } from '../services/player-user.service';

@Controller('playerUser')
export class PlayerUserController {
  constructor(private readonly playerUserService: PlayerUserService) {}

  @Post()
  create(@Body() createPlayerUser: CreatePlayerUserInput) {
    return this.playerUserService.create(createPlayerUser);
  }

  /*  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  } */

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  /* @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlayerUserInput: UpdatePlayerUserInput,
  ) {
    return `This action updates a #${id} playerUser`;
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
