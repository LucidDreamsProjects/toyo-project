import { Body, Controller, Post } from '@nestjs/common';
import { CreateNftDto } from '../dto/create-nft.dto';
import { MintNftDto } from '../dto/mint-nft.dto';
import { NftService } from '../services/nft.service';

@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Post('create')
  public async createNftTemplate(@Body() dto: CreateNftDto): Promise<any> {
    return await this.nftService.createNft(dto);
  }

  @Post('mint')
  public async mintNft(@Body() dto: MintNftDto): Promise<any> {
    return await this.nftService.mintNft(dto);
  }
}
