import { IsNumber } from 'class-validator';

export class MintNftDto {
  @IsNumber()
  typeId!: number;

  @IsNumber()
  quantity!: number;
}
