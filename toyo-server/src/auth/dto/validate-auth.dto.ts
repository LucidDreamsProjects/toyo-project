import { IsString, IsNumber } from 'class-validator';

export class ValidateAuthDto {
  @IsNumber()
  grant_type!: string;

  @IsString()
  client_id!: string;

  @IsString()
  client_secret!: string;
}
