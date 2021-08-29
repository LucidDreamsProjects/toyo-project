import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePlayerDto {
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

  @IsString()
  @IsNotEmpty()
  walletId!: string;

  @IsNumber()
  @IsNotEmpty()
  balance!: number;
}
