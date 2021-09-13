import { IsString } from 'class-validator';

export class UpdateNftDto {
  @IsString()
  templateId!: string;

  @IsString()
  tokenId!: string;

  @IsString()
  playerId!: string;
}
