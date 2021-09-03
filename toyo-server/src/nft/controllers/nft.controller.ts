import { NFT } from '@arkane-network/arkane-connect/dist/src/models/wallet/NFT';
import {
  Body,
  Controller,
  Post,
  HttpCode,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { CreateTemplateDto } from '../dto/create-template.dto';
import { NftService } from '../services/nft.service';
import { SignerResult } from '@arkane-network/arkane-connect';
import { TransferNftDto } from '../dto/transfer-nft.dto';
import { MintNftDto } from '../dto/mint-nft.dto';

@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @HttpCode(200)
  @Post('template')
  public async createTemplate(
    @Body() dto: CreateTemplateDto,
  ): Promise<NFT | void> {
    return await this.nftService.createTemplate(dto);
  }

  @HttpCode(200)
  @Get('template')
  public async getTemplates(): Promise<NFT[] | void> {
    return await this.nftService.getTemplates();
  }

  @HttpCode(200)
  @Get('template/:typeId')
  public async getTemplate(
    @Param('typeId') typeId: number,
  ): Promise<NFT | void> {
    return await this.nftService.getTemplate(typeId);
  }

  @HttpCode(200)
  @Post('token')
  public async mintNft(
    @Body() dto: MintNftDto,
  ): Promise<Array<Record<string, string | number>> | void> {
    return await this.nftService.mintNft(dto);
  }

  @HttpCode(200)
  @Post('token/transfer:pincode')
  public async transferNft(
    @Param('pincode') pincode: string,
    @Body() dto: TransferNftDto,
  ): Promise<SignerResult | void> {
    return await this.nftService.transferNft(pincode, dto);
  }
}
