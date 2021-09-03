import { IsNumber, IsString } from 'class-validator';

export class SaveContractDto {
  @IsNumber()
  contractId?: number;

  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsString()
  chain?: string;

  @IsString()
  symbol?: string;

  @IsString()
  externalUrl?: string;
}
