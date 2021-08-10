import { IsString, IsNumber } from 'class-validator';

export class SaveAuthDto {
  @IsNumber()
  index?: number;

  @IsString()
  refreshToken!: string;
}
