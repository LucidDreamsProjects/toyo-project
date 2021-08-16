import { IsString } from 'class-validator';

export class SaveAuthDto {
  @IsString()
  refreshToken!: string;
}
