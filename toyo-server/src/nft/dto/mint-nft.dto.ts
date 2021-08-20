import { IsNumber, IsArray } from 'class-validator';

export class MintNftDto {
  @IsNumber()
  typeId!: number;

  @IsArray()
  destinations!: Array<string>;
}
