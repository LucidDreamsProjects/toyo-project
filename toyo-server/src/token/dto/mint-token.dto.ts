import { IsString, IsNumber } from 'class-validator';

export class MintTokenDto {
  @IsString()
  wallet!: string;

  @IsNumber()
  typeId!: number;

  @IsNumber()
  quantity!: number;
}
