"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NftController = void 0;
const common_1 = require("@nestjs/common");
const create_template_dto_1 = require("../dto/create-template.dto");
const nft_service_1 = require("../services/nft.service");
const mint_nft_dto_1 = require("../dto/mint-nft.dto");
let NftController = class NftController {
    constructor(nftService) {
        this.nftService = nftService;
    }
    async createTemplate(dto) {
        return await this.nftService.createTemplate(dto);
    }
    async getTemplates() {
        return await this.nftService.getTemplates();
    }
    async getTemplateById(typeId) {
        return await this.nftService.getTemplateById(typeId);
    }
    async mintNft(dto) {
        return await this.nftService.mintNft(dto);
    }
};
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_template_dto_1.CreateTemplateDto]),
    __metadata("design:returntype", Promise)
], NftController.prototype, "createTemplate", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NftController.prototype, "getTemplates", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(':typeId'),
    __param(0, (0, common_1.Param)('typeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NftController.prototype, "getTemplateById", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mint_nft_dto_1.MintNftDto]),
    __metadata("design:returntype", Promise)
], NftController.prototype, "mintNft", null);
NftController = __decorate([
    (0, common_1.Controller)('template'),
    __metadata("design:paramtypes", [nft_service_1.NftService])
], NftController);
exports.NftController = NftController;
//# sourceMappingURL=nft.controller.js.map