import { NFT } from '@arkane-network/arkane-connect/dist/src/models/wallet/NFT';
import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { CreateNftDto } from '../dto/create-nft.dto';
import { MintNftDto } from '../dto/mint-nft.dto';
import { Nft } from '../entities/nft.entity';
import { NftService } from '../services/nft.service';

@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @HttpCode(200)
  @Post('create')
  public async createNft(@Body() dto: CreateNftDto): Promise<NFT | void> {
    console.log(dto);
    return await this.nftService.createNft(dto);
  }

  @HttpCode(200)
  @Post('mint')
  public async mintNft(@Body() dto: MintNftDto): Promise<NFT | void> {
    return await this.nftService.mintNft(dto);
  }
}
