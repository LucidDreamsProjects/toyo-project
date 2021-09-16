"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRepository = void 0;
const typeorm_1 = require("typeorm");
const token_entity_1 = require("../entities/token.entity");
const common_1 = require("@nestjs/common");
let TokenRepository = class TokenRepository extends typeorm_1.Repository {
    async saveToken(dto) {
        const { tokenId, templateId, contractId, name, fungible, owner, transactionHash, } = dto;
        const token = new token_entity_1.Token();
        token.tokenId = tokenId;
        token.templateId = templateId;
        token.contractId = contractId;
        token.name = name;
        token.fungible = fungible;
        token.owner = owner;
        token.transactionHash = transactionHash;
        await this.save(token);
        return token;
    }
    async getTokenById(templateId, tokenId) {
        const token = await (0, typeorm_1.getConnection)()
            .createQueryBuilder()
            .select('template_Token')
            .from(token_entity_1.Token, 'template_Token')
            .where('template_Token.tokenId = :tokenId', { tokenId: tokenId })
            .andWhere('template_Token.templateId = :templateId', {
            templateId: templateId,
        })
            .getOne();
        if (!token) {
            throw new common_1.NotFoundException(`token not found`);
        }
        return token;
    }
};
TokenRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(token_entity_1.Token)
], TokenRepository);
exports.TokenRepository = TokenRepository;
//# sourceMappingURL=token.repository.js.map