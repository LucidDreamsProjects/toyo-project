import { IsString, IsNumber } from 'class-validator';

export class SaveNftDto {
  @IsString()
  nftId!: number;

  @IsString()
  contractId!: number;

  @IsString()
  name!: string;

  @IsNumber()
  maxSupply?: number;

  @IsNumber()
  currentSupply?: number;
}
