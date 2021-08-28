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
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { Player } from '../entities/player.entity';
import { PlayerService } from '../services/player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @HttpCode(200)
  @Get()
  public async findAll(): Promise<Player[] | void> {
    return await this.playerService.findAll();
  }

  @HttpCode(200)
  @Get(':playerId')
  public async findOne(
    @Param('playerId')
    playerId: string,
  ): Promise<Player | undefined> {
    console.log(playerId);
    return await this.playerService.findOne(playerId);
  }

  @HttpCode(200)
  @Post()
  public async createController(
    @Body() createPlayerDto: CreatePlayerDto,
  ): Promise<Player> {
    return await this.playerService.createService(createPlayerDto);
  }

  @HttpCode(200)
  @Patch(':playerId')
  public async update(
    @Param('playerId') playerId: string,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player | undefined> {
    return await this.playerService.update(playerId, updatePlayerDto);
  }

  @HttpCode(200)
  @Delete(':playerId')
  public async deleteByIndex(
    @Param('playerId') playerId: string,
  ): Promise<void> {
    const player = await this.playerService.findOne(playerId);

    if (!player) {
      throw new NotFoundException(`Player not found`);
    }

    return await this.playerService.remove(playerId);
  }
}
