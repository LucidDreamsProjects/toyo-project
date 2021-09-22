import { Player } from '../entities/player.entity';
import { PlayerRepository } from '../repositories/player.repository';
import { SavePlayerDto } from '../dto/save-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
export declare class PlayerService {
    private playerRepository;
    constructor(playerRepository: PlayerRepository);
    savePlayer(savePlayerDto: SavePlayerDto): Promise<Player>;
    findAll(): Promise<Player[]>;
    findOne(playerId: string): Promise<Player>;
    update(playerId: string, updatePlayerDto: UpdatePlayerDto): Promise<Player | undefined>;
    remove(playerId: string): Promise<void>;
}
