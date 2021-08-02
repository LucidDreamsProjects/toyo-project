import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatePlayerDTO } from '../dto/create-player.dto';
import { EditPlayerDTO } from '../dto/edit-player.dto';
import { Player } from '../entities/player.entity';
import { PlayerService } from '../services/player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('create')
  public async createPlayer(
    @Body() createPlayerDto: CreatePlayerDTO,
  ): Promise<Player> {
    const player = await this.playerService.createPlayer(createPlayerDto);
    return player;
  }

  @Get('all')
  public async getPlayers(): Promise<Player[]> {
    const players = await this.playerService.getPlayers();
    return players;
  }

  @Get('/:playerId')
  public async getPlayerById(
    @Param('playerId') playerId: number,
  ): Promise<Player> {
    const player = await this.playerService.getPlayerById(playerId);
    return player;
  }

  @Patch('/edit/:playerId')
  public async editPlayer(
    @Body() editPlayerDto: EditPlayerDTO,
    @Param('playerId') playerId: number,
  ): Promise<Player> {
    const player = this.playerService.editPlayer(playerId, editPlayerDto);
    return player;
  }

  @Delete('/delete/:playerId')
  public async deletePlayer(@Param('playerId') playerId: number) {
    const deletedPlayer = await this.playerService.deletePlayer(playerId);
    return deletedPlayer;
  }
}
