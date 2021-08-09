import { IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  playerID!: string;

  @IsString()
  username!: string;

  @IsString()
  email!: string;

  @IsString()
  walletAddress!: string;
}
