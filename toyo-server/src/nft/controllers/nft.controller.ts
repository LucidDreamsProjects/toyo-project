import { Controller, Post, Req } from '@nestjs/common';
import { CreateNftDto } from '../dto/create-nft.dto';
import { NftService } from '../services/nft.service';

@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Post('create')
  public async createNft(@Req() request: CreateNftDto): Promise<any> {
    const nft = await this.nftService.createNft(request);
    return nft;
  }
}
