import { SavePlayerDto } from '../dto/save-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { Player } from '../entities/player.entity';
import { PlayerService } from '../services/player.service';
export declare class PlayerController {
    private readonly playerService;
    constructor(playerService: PlayerService);
    findAll(): Promise<Player[] | void>;
    findOne(playerId: string): Promise<Player | undefined>;
    savePlayer(savePlayerDto: SavePlayerDto): Promise<Player>;
    update(playerId: string, updatePlayerDto: UpdatePlayerDto): Promise<Player | undefined>;
    deleteByPlayerId(playerId: string): Promise<void>;
}
