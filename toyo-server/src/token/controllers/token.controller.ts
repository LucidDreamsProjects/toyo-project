import { NFT } from '@arkane-network/arkane-connect/dist/src/models/wallet/NFT';
import { Body, Controller, Post, HttpCode, Param, Get } from '@nestjs/common';
import { CreateTemplateDto } from '../dto/create-template.dto';
import { TokenService } from '../services/token.service';
import { MintTokenDto } from '../dto/mint-token.dto';

@Controller('template')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @HttpCode(200)
  @Post()
  public async createTemplate(
    @Body() dto: CreateTemplateDto,
  ): Promise<NFT | void> {
    return await this.tokenService.createTemplate(dto);
  }

  @HttpCode(200)
  @Get()
  public async getTemplates(): Promise<NFT[] | void> {
    return await this.tokenService.getTemplates();
  }

  @HttpCode(200)
  @Get(':typeId')
  public async getTemplateById(
    @Param('typeId') typeId: number,
  ): Promise<NFT | void> {
    return await this.tokenService.getTemplateById(typeId);
  }

  @HttpCode(200)
  @Post('token')
  public async mintToken(
    @Body() dto: MintTokenDto,
  ): Promise<Array<Record<string, string | number>> | void> {
    return await this.tokenService.mintToken(dto);
  }
}
