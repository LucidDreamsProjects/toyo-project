import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlayerUsersService } from './player-users.service';
import { PlayerUser } from './entities/player-user.entity';
import { CreatePlayerUserInput } from './dto/create-player-user.input';
import { UpdatePlayerUserInput } from './dto/update-player-user.input';

@Resolver(() => PlayerUser)
export class PlayerUsersResolver {
  constructor(private readonly playerUsersService: PlayerUsersService) {}

  @Mutation(() => PlayerUser)
  createPlayerUser(@Args('createPlayerUserInput') createPlayerUserInput: CreatePlayerUserInput) {
    return this.playerUsersService.create(createPlayerUserInput);
  }

  @Query(() => [PlayerUser], { name: 'playerUsers' })
  findAll() {
    return this.playerUsersService.findAll();
  }

  @Query(() => PlayerUser, { name: 'playerUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.playerUsersService.findOne(id);
  }

  @Mutation(() => PlayerUser)
  updatePlayerUser(@Args('updatePlayerUserInput') updatePlayerUserInput: UpdatePlayerUserInput) {
    return this.playerUsersService.update(updatePlayerUserInput.id, updatePlayerUserInput);
  }

  @Mutation(() => PlayerUser)
  removePlayerUser(@Args('id', { type: () => Int }) id: number) {
    return this.playerUsersService.remove(id);
  }
}
