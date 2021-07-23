import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PlayerUser {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField!: number;
}
