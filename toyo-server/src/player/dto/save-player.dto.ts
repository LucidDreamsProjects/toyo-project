import { Wallet } from '@arkane-network/arkane-connect';
import { IsString, IsNumber, IsNotEmpty, IsArray } from 'class-validator';

export class SavePlayerDto {
  @IsString()
  @IsNotEmpty()
  playerId!: string;

  @IsString()
  @IsNotEmpty()
  username?: string;

  @IsString()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsArray()
  @IsNotEmpty()
  wallets?: string;
}
