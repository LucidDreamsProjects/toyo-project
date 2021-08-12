import { IsString } from 'class-validator';

export class CreateContractDto {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  chain!: string;

  @IsString()
  symbol!: string;

  @IsString()
  image!: string;

  @IsString()
  externalUrl!: string;

  @IsString()
  media!: Array<Record<string, string>>;
}
