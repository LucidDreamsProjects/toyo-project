import { IsString, IsNumber } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  walletType!: string;

  @IsString()
  secretType!: string;

  @IsNumber()
  pincode!: string;
}
