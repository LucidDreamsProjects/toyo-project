import { Body, Controller, Post } from '@nestjs/common';
import { CreateNftDto } from '../dto/create-nft.dto';
import { NftService } from '../services/nft.service';

@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Post('create')
  public async createNft(@Body() dto: CreateNftDto): Promise<any> {
    return await this.nftService.createNft(dto);
  }
}
