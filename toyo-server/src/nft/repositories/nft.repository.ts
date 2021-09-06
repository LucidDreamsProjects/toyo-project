import { Repository, EntityRepository, getConnection } from 'typeorm';
import { Nft } from '../entities/nft.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SaveNftDto } from '../dto/save-nft.dto';

@Injectable()
@EntityRepository(Nft)
export class NftRepository extends Repository<Nft> {
  public async saveNft(dto: SaveNftDto): Promise<Nft> {
    const { nftId, templateId, contractId, name } = dto;

    const nft = new Nft();
    nft.nftId = nftId;
    nft.templateId = templateId;
    nft.contractId = contractId;
    nft.name = name;

    await this.save(nft);
    return nft;
  }

  public async getNftById(templateId: string, nftId: string): Promise<Nft> {
    const nft = await getConnection()
      .createQueryBuilder()
      .select('base_Nft')
      .from(Nft, 'base_Nft')
      .where('base_Nft.nftId = :nftId', { nftId: nftId })
      .andWhere('base_Nft.templateId = :templateId', { templateId: templateId })
      .getOne();

    if (!nft) {
      throw new NotFoundException(`NFT not found`);
    }

    return nft;
  }
}
