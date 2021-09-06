import { NFT } from '@arkane-network/arkane-connect/dist/src/models/wallet/NFT';
import { Body, Controller, Post, HttpCode, Param, Get } from '@nestjs/common';
import { CreateTemplateDto } from '../dto/create-template.dto';
import { NftService } from '../services/nft.service';
import { MintNftDto } from '../dto/mint-nft.dto';

@Controller('template')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @HttpCode(200)
  @Post()
  public async createTemplate(
    @Body() dto: CreateTemplateDto,
  ): Promise<NFT | void> {
    return await this.nftService.createTemplate(dto);
  }

  @HttpCode(200)
  @Get()
  public async getTemplates(): Promise<NFT[] | void> {
    return await this.nftService.getTemplates();
  }

  @HttpCode(200)
  @Get(':typeId')
  public async getTemplateById(
    @Param('typeId') typeId: number,
  ): Promise<NFT | void> {
    return await this.nftService.getTemplateById(typeId);
  }

  @HttpCode(200)
  @Post('token')
  public async mintNft(
    @Body() dto: MintNftDto,
  ): Promise<Array<Record<string, string | number>> | void> {
    return await this.nftService.mintNft(dto);
  }

  /* @HttpCode(200)
  @Patch('token')
  public async updateNft(@Body() dto: UpdateNftDto): Promise<Nft | void> {
    return await this.nftService.updateNft(dto);
  } */

  /* @HttpCode(200)
  @Get('token/:templateId/token/:tokenId')
  public async getNftById(
    @Param('templateId') templateId: string,
    @Param('tokenId') tokenId: string,
  ): Promise<Nft> {
    return await this.nftService.getNftById(templateId, tokenId);
  } */

  /* @HttpCode(200)
  @Post('transfer/template/token')
  public async transferNft(
    @Body() dto: TransferRequestDto,
  ): Promise<SignerResult | void> {
    return await this.nftService.transferNft(dto);
  } */
}
