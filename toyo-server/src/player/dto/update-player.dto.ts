import { Wallet } from '@arkane-network/arkane-connect';
import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsString } from 'class-validator';
import { SavePlayerDto } from './save-player.dto';

export class UpdatePlayerDto extends PartialType(SavePlayerDto) {
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

  @IsArray()
  wallets?: string;
}
