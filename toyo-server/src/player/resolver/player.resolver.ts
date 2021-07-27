/* import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlayerService } from '../services/player.service';
import { PlayerRepository } from '../entities/player.entity';
import { CreatePlayerInput } from './dto/create-player-.input';
import { UpdatePlayerInput } from './dto/update-player-.input';

@Resolver(() => PlayerRepository)
export class PlayerResolver {
  constructor(private readonly playersService: PlayerService) {}

  @Mutation(() => PlayerRepository)
  createPlayer(@Args('createPlayerInput') createPlayerInput: CreatePlayerInput) {
    return this.playersService.create(createPlayerInput);
  }

  @Query(() => [PlayerRepository], { name: 'player' })
  findAll() {
    return this.playerService.findAll();
  }

  @Query(() => PlayerRepository, { name: 'player' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.playerService.findOne(id);
  }

  @Mutation(() => PlayerRepository)
  updatePlayer(
    @Args('updatePlayerInput') updatePlayerInput: PlayerInput,
  ) {
    return this.playerService.update(
      PlayerInput.id,
      PlayerInput,
    );
  }

  @Mutation(() => PlayerRepository)
  removePlayer(@Args('id', { type: () => Int }) id: number) {
    return this.playerService.remove(id);
  }
} */
