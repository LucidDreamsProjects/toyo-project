import { IsNumber } from 'class-validator';

export class MintTokenDto {
  @IsNumber()
  typeId!: number;

  @IsNumber()
  quantity!: number;
}
