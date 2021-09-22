import { Repository } from 'typeorm';
import { Player } from '../entities/player.entity';
import { SavePlayerDto } from '../dto/save-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
export declare class PlayerRepository extends Repository<Player> {
    findAll(): Promise<Player[]>;
    findById(playerId: string): Promise<Player | undefined>;
    savePlayer(savePlayerDto: SavePlayerDto): Promise<Player>;
    editPlayer(playerId: string, updatePlayerDto: UpdatePlayerDto): Promise<Player | undefined>;
    destroy(playerId: string): Promise<void>;
}
