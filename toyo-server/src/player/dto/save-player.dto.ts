import { IsString } from 'class-validator';

export class SavePlayerDto {
  @IsString()
  playerID!: string;

  @IsString()
  username!: string;

  @IsString()
  email!: string;

  @IsString()
  walletAddress!: string;
}
