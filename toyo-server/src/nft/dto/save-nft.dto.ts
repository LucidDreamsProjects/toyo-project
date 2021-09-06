import { IsString, IsNumber } from 'class-validator';

export class SaveNftDto {
  @IsNumber()
  nftId!: number;

  @IsNumber()
  templateId!: number;

  @IsNumber()
  contractId!: number;

  @IsString()
  name!: string;
}
