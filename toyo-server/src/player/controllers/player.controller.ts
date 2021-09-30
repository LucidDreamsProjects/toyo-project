import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { SavePlayerDto } from '../dto/save-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { Player } from '../entities/player.entity';
import { PlayerService } from '../services/player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @HttpCode(200)
  @Get()
  public async findAll(): Promise<Player[] | void> {
    return await this.playerService.findAllPlayers();
  }

  @HttpCode(200)
  @Get(':playerId')
  public async findOne(
    @Param('playerId')
    playerId: string,
  ): Promise<Player | undefined> {
    // console.log(playerId);
    return await this.playerService.findOnePlayer(playerId);
  }

  @HttpCode(200)
  @Post()
  public async savePlayer(
    @Body() savePlayerDto: SavePlayerDto,
  ): Promise<Player> {
    return await this.playerService.savePlayer(savePlayerDto);
  }

  @HttpCode(200)
  @Patch(':playerId')
  public async updatePlayer(
    @Param('playerId') playerId: string,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player | undefined> {
    return await this.playerService.updatePlayer(playerId, updatePlayerDto);
  }

  @HttpCode(200)
  @Delete(':playerId')
  public async deletePlayerByPlayerId(
    @Param('playerId') playerId: string,
  ): Promise<void> {
    const player = await this.playerService.findOnePlayer(playerId);

    if (!player) {
      throw new NotFoundException(`Player not found`);
    }

    return await this.playerService.removePlayer(playerId);
  }
}
