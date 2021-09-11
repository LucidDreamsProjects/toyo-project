import { Repository } from 'typeorm';
import { Nft } from '../entities/nft.entity';
import { SaveNftDto } from '../dto/save-nft.dto';
export declare class NftRepository extends Repository<Nft> {
    saveNft(dto: SaveNftDto): Promise<Nft>;
    getNftById(templateId: string, nftId: string): Promise<Nft>;
}
