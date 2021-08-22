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
    const player = await this.playerService.save(savePlayerDto);
    return player;
  }

  @Get('all')
  public async getAll(): Promise<Player[]> {
    const players = await this.playerService.getAll();
    return players;
  }

  @Get(':index')
  public async getById(
    @Param('index', new ParseUUIDPipe())
    index: number,
  ): Promise<Player | undefined | null | void> {
    const player = await this.playerService.getByIndex(index);
    return player;
  }

  @Patch('edit/:index')
  public async editByIndex(
    @Param('index', new ParseUUIDPipe())
    index: number,
    @Body() editPlayerDto: EditPlayerDto,
  ): Promise<Player> {
    const player = await this.playerService.editByIndex(index, editPlayerDto);
    return player;
  }

  @Delete('delete/:index')
  public async deleteByIndex(
    @Param('index', new ParseUUIDPipe())
    index: number,
  ) {
    const deletedPlayer = await this.playerService.deleteByIndex(index);
    return deletedPlayer;
  }
}
