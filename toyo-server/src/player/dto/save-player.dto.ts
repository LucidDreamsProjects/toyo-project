import { IsString, IsNumber } from 'class-validator';

export class SavePlayerDto {
  @IsString()
  playerID!: string;

  @IsNumber()
  index?: number;

  @IsString()
  username!: string;

  @IsString()
  email!: string;

  @IsString()
  walletAddress!: string;

  @IsString()
  accessToken?: string;
}
