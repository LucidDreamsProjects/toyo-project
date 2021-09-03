import { IsNumber, IsArray } from 'class-validator';

export class MintNftDto {
  @IsNumber()
  typeId!: number;

  @IsNumber()
  value!: number;

  @IsNumber()
  quantity!: number;
}
