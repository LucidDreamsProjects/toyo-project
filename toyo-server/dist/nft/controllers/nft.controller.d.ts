import { NFT } from '@arkane-network/arkane-connect/dist/src/models/wallet/NFT';
import { CreateTemplateDto } from '../dto/create-template.dto';
import { NftService } from '../services/nft.service';
import { MintNftDto } from '../dto/mint-nft.dto';
export declare class NftController {
    private readonly nftService;
    constructor(nftService: NftService);
    createTemplate(dto: CreateTemplateDto): Promise<NFT | void>;
    getTemplates(): Promise<NFT[] | void>;
    getTemplateById(typeId: number): Promise<NFT | void>;
    mintNft(dto: MintNftDto): Promise<Array<Record<string, string | number>> | void>;
}
