import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SavePlayerDto } from '../dto/save-player.dto';
import { EditPlayerDto } from '../dto/edit-player.dto';
import { Player } from '../entities/player.entity';
import { PlayerService } from '../services/player.service';
import { ParseUUIDPipe } from '@nestjs/common';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('save')
  public async save(
    @Body() savePlayerDto: SavePlayerDto,
  ): Promise<Player | void> {
    return await this.playerService.save(savePlayerDto);
  }

  @Get('all')
  public async getAll(): Promise<Player[] | void> {
    return await this.playerService.getAll();
  }

  @Get(':index')
  public async getByIndex(
    @Param('index', new ParseUUIDPipe())
    index: number,
  ): Promise<Player | undefined> {
    return await this.playerService.getByIndex(index);
  }

  @Patch('edit/:index')
  public async editByIndex(
    @Param('index', new ParseUUIDPipe())
    index: number,
    @Body() editPlayerDto: EditPlayerDto,
  ): Promise<Player | void> {
    return await this.playerService.editByIndex(index, editPlayerDto);
  }

  @Delete('delete/:index')
  public async deleteByIndex(
    @Param('index', new ParseUUIDPipe())
    index: number,
  ): Promise<void> {
    await this.playerService.deleteByIndex(index);
  }
}
