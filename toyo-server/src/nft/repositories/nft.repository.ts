import { Repository, EntityRepository } from 'typeorm';
import { Nft } from '../entities/nft.entity';
import { Injectable } from '@nestjs/common';
import { SaveNftDto } from '../dto/save-nft.dto';

@Injectable()
@EntityRepository(Nft)
export class NftRepository extends Repository<Nft> {
  public async saveNft(dto: SaveNftDto): Promise<Nft> {
    const { nftId, templateId, playerId, name, value } = dto;

    const nft = new Nft();
    nft.nftId = nftId;
    nft.templateId = templateId;
    nft.playerId = playerId;
    nft.name = name;
    nft.value = value;

    await this.save(nft);
    return nft;
  }
}
