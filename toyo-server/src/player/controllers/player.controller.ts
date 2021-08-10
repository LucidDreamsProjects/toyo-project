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

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('create')
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

  @Get(':playerID')
  public async getById(
    @Param('playerId') playerID: string,
  ): Promise<Player | undefined | null | void> {
    const player = await this.playerService.getById(playerID);
    return player;
  }

  @Patch('edit/:playerID')
  public async editById(
    @Param('playerID') playerID: string,
    @Body() editPlayerDto: EditPlayerDto,
  ): Promise<Player> {
    const player = await this.playerService.editById(playerID, editPlayerDto);
    return player;
  }

  @Delete('delete/:playerID')
  public async deleteById(@Param('playerId') playerID: string) {
    const deletedPlayer = await this.playerService.deleteById(playerID);
    return deletedPlayer;
  }
}
