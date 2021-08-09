import { Repository, EntityRepository } from 'typeorm';
import { Player } from '../entities/player.entity';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { EditPlayerDto } from '../dto/edit-player.dto';

@EntityRepository(Player)
export class PlayerRepository extends Repository<Player> {
  public async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const { playerID, username, email, walletAddress } = createPlayerDto;

    const player = new Player();
    player.playerID = playerID;
    player.username = username;
    player.email = email;
    player.walletAddress = walletAddress;

    await player.save();
    return player;
  }

  public async editPlayer(
    editPlayerDto: EditPlayerDto,
    editedPlayer: Player,
  ): Promise<Player> {
    const { firstName, lastName, address } = editPlayerDto;

    editedPlayer.firstName = firstName;
    editedPlayer.lastName = lastName;
    editedPlayer.address = address;
    await editedPlayer.save();

    return editedPlayer;
  }
}
