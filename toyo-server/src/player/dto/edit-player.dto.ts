import { IsString } from 'class-validator';

export class EditPlayerDTO {
  @IsString()
  email!: string;

  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsString()
  address!: string;
}
