import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreatePlayerDto } from './create-player.dto';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
  @IsString()
  username?: string;

  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsString()
  email?: string;

  @IsString()
  address?: string;
}
