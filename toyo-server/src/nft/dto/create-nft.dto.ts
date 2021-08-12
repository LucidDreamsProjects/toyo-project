import { IsString, IsBoolean, IsArray } from 'class-validator';

export class CreateNftDto {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  image!: string;

  @IsString()
  externalUrl!: string;

  @IsString()
  backgroundColor!: string;

  @IsBoolean()
  fungible!: boolean;

  @IsString()
  maxSupply!: string;

  @IsBoolean()
  burnable!: boolean;

  @IsArray()
  animationUrls!: Array<Record<string, string>>;

  @IsArray()
  attributes!: Array<Record<string, string | undefined>>;
}
