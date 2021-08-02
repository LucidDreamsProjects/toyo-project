import { IsString } from 'class-validator';

export class CreatePlayerDTO {
  @IsString()
  refreshToken!: string;

  @IsString()
  walletAddress!: string;

  @IsString()
  username!: string;
}
