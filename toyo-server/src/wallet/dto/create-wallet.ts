import { IsString, IsNumber } from 'class-validator';

export class CreateWalletDto {
  @IsNumber()
  pincode!: string;
}
