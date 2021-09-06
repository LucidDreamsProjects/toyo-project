import { IsString, IsNumber } from 'class-validator';

export class TransferRequestDto {
  @IsNumber()
  templateId!: string;

  @IsNumber()
  tokenId!: string;

  @IsString()
  tokenAddress!: string;

  @IsString()
  walletId!: string;

  @IsString()
  to!: string;

  @IsNumber()
  pincode!: number;

  @IsNumber()
  value!: number;
}
