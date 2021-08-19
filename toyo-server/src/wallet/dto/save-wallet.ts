import { IsNumber } from 'class-validator';

export class SaveWalletDto {
  @IsNumber()
  pincode!: number;
}
