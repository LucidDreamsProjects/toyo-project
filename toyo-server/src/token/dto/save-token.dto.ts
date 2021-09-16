import { IsString, IsNumber } from 'class-validator';

export class SaveTokenDto {
  @IsNumber()
  tokenId!: number;

  @IsNumber()
  templateId!: number;

  @IsNumber()
  contractId!: number;

  @IsString()
  name!: string;

  @IsNumber()
  fungible!: boolean;

  @IsString()
  owner!: string;

  @IsString()
  transactionHash!: string;
}
