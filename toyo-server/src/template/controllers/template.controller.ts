import { NFT } from '@arkane-network/arkane-connect/dist/src/models/wallet/NFT';
import { CreateTemplateDto } from '../dto/create-template.dto';
import { Body, Controller, Post, HttpCode, Param, Get } from '@nestjs/common';
import { TemplateService } from '../services/template.service';

@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @HttpCode(200)
  @Post()
  public async createTemplate(
    @Body() dto: CreateTemplateDto,
  ): Promise<NFT | void> {
    return await this.templateService.createTemplate(dto);
  }

  @HttpCode(200)
  @Get()
  public async getTemplates(): Promise<NFT[] | void> {
    return await this.templateService.getTemplates();
  }

  @HttpCode(200)
  @Get(':typeId')
  public async getTemplateById(
    @Param('typeId') typeId: number,
  ): Promise<NFT | void> {
    return await this.templateService.getTemplateById(typeId);
  }
}
