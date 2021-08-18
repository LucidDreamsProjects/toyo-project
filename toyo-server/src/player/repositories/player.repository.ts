import { Repository, EntityRepository } from 'typeorm';
import { Player } from '../entities/player.entity';
import { SavePlayerDto } from '../dto/save-player.dto';
import { EditPlayerDto } from '../dto/edit-player.dto';

@EntityRepository(Player)
export class PlayerRepository extends Repository<Player> {
  public async savePlayer(savePlayerDto: SavePlayerDto): Promise<Player> {
    const { playerID, username, email, walletAddress, refreshToken } =
      savePlayerDto;

    const player = new Player();
    player.playerID = playerID;
    player.username = username;
    player.email = email;
    player.walletAddress = walletAddress;
    player.refreshToken = refreshToken;

    await player.save();
    return player;
  }

  public async editPlayer(
    editPlayerDto: EditPlayerDto,
    targetPlayer: Player,
  ): Promise<Player> {
    const { firstName, lastName, address } = editPlayerDto;

    targetPlayer.firstName = firstName;
    targetPlayer.lastName = lastName;
    targetPlayer.address = address;
    await targetPlayer.save();

    return targetPlayer;
  }
}
