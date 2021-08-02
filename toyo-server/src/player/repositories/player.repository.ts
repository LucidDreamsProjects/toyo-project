import { Repository, EntityRepository } from 'typeorm';
import { Player } from '../entities/player.entity';
import { CreatePlayerDTO } from '../dto/create-player.dto';
import { EditPlayerDTO } from '../dto/edit-player.dto';

@EntityRepository(Player)
export class PlayerRepository extends Repository<Player> {
  public async createPlayer(createPlayerDto: CreatePlayerDTO): Promise<Player> {
    const { refreshToken, walletAddress, username } = createPlayerDto;

    const player = new Player();
    player.refreshToken = refreshToken;
    player.walletAddress = walletAddress;
    player.username = username;

    await player.save();
    return player;
  }

  public async editPlayer(
    editPlayerDto: EditPlayerDTO,
    editedPlayer: Player,
  ): Promise<Player> {
    const { email, firstName, lastName, address } = editPlayerDto;

    editedPlayer.email = email;
    editedPlayer.firstName = firstName;
    editedPlayer.lastName = lastName;
    editedPlayer.address = address;
    await editedPlayer.save();

    return editedPlayer;
  }
}
