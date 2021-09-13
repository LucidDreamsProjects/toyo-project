import { IsString, IsNumber } from 'class-validator';

export class SaveTemplateDto {
  @IsNumber()
  templateId!: number;

  @IsNumber()
  contractId!: number;

  @IsString()
  name!: string;
}
