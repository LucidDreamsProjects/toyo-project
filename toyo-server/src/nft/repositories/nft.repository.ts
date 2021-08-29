import { Repository, EntityRepository } from 'typeorm';
import { Nft } from '../entities/nft.entity';
import { Injectable } from '@nestjs/common';
import { SaveNftDto } from '../dto/save-nft.dto';

@Injectable()
@EntityRepository(Nft)
export class NftRepository extends Repository<Nft> {
  public async saveNft(saveNftDto: SaveNftDto): Promise<Nft> {
    const { nftId, contractId, name, maxSupply, currentSupply } = saveNftDto;

    const nft = new Nft();
    nft.nftId = nftId;
    nft.contractId = contractId;
    nft.name = name;
    nft.maxSupply = maxSupply;
    nft.currentSupply = currentSupply;

    await this.save(nft);
    return nft;
  }

  public async findById(nftId: number): Promise<Nft | undefined> {
    const nft = await this.findOne(nftId);

    if (nft) {
      console.log(nft);
    }

    return nft;
  }
}
