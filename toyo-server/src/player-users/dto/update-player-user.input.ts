import { CreatePlayerUserInput } from './create-player-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlayerUserInput extends PartialType(CreatePlayerUserInput) {
  @Field(() => Int)
  id: number;
}
