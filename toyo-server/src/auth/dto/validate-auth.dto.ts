import { IsString, IsNumber } from 'class-validator';

export class ValidateAuthDto {
  @IsNumber()
  grant_type!: string | undefined;

  @IsString()
  client_id!: string | undefined;

  @IsString()
  client_secret!: string | undefined;
}
