import { IsString } from 'class-validator';

export class UpdateNftDto {
  @IsString()
  templateId!: string;

  @IsString()
  nftId!: string;

  @IsString()
  playerId!: string;
}
