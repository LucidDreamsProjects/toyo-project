"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NftRepository = void 0;
const typeorm_1 = require("typeorm");
const nft_entity_1 = require("../entities/nft.entity");
const common_1 = require("@nestjs/common");
let NftRepository = class NftRepository extends typeorm_1.Repository {
    async saveNft(dto) {
        const { nftId, templateId, contractId, name } = dto;
        const nft = new nft_entity_1.Nft();
        nft.nftId = nftId;
        nft.templateId = templateId;
        nft.contractId = contractId;
        nft.name = name;
        await this.save(nft);
        return nft;
    }
    async getNftById(templateId, nftId) {
        const nft = await (0, typeorm_1.getConnection)()
            .createQueryBuilder()
            .select('base_Nft')
            .from(nft_entity_1.Nft, 'base_Nft')
            .where('base_Nft.nftId = :nftId', { nftId: nftId })
            .andWhere('base_Nft.templateId = :templateId', { templateId: templateId })
            .getOne();
        if (!nft) {
            throw new common_1.NotFoundException(`NFT not found`);
        }
        return nft;
    }
};
NftRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(nft_entity_1.Nft)
], NftRepository);
exports.NftRepository = NftRepository;
//# sourceMappingURL=nft.repository.js.map