import { CreateTemplateDto } from '../dto/create-template.dto';
import { MintNftDto } from '../dto/mint-nft.dto';
import { AuthService } from '../../auth/services/auth.service';
import { NFT } from '@arkane-network/arkane-connect/dist/src/models/wallet/NFT';
import { TemplateRepository } from '../repositories/template.repository';
import { NftRepository } from '../repositories/nft.repository';
export declare class NftService {
    private templateRepository;
    private nftRepository;
    private authService;
    private readonly ADMIN_ADDRESS;
    private readonly CONTRACT_TRANSACTION_HASH;
    private readonly CONTRACT_ADDRESS;
    private readonly CONTRACT_ID;
    private readonly APPLICATION_ID;
    private readonly CREATE_TEMPLATE_URL;
    private readonly MINT_NFT_URL;
    private readonly TRANSFER_NFT_URL;
    constructor(templateRepository: TemplateRepository, nftRepository: NftRepository, authService: AuthService);
    createTemplate(dto: CreateTemplateDto): Promise<NFT | void>;
    getTemplates(): Promise<NFT[] | void>;
    getTemplateById(typeId: number): Promise<NFT | void>;
    private updateTemplate;
    mintNft(dto: MintNftDto): Promise<Array<Record<string, string | number>> | void>;
}
