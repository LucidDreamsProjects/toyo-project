import { IsString } from 'class-validator';

export class EditPlayerDto {
  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsString()
  address!: string;
}
