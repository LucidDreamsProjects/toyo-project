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
exports.TokenController = void 0;
const common_1 = require("@nestjs/common");
const create_template_dto_1 = require("../dto/create-template.dto");
const token_service_1 = require("../services/token.service");
const mint_token_dto_1 = require("../dto/mint-token.dto");
const transfer_token_dto_1 = require("../dto/transfer-token.dto");
let TokenController = class TokenController {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    async createTemplate(dto) {
        return await this.tokenService.createTemplate(dto);
    }
    async getTemplates() {
        return await this.tokenService.getTemplates();
    }
    async getTemplateById(typeId) {
        return await this.tokenService.getTemplateById(typeId);
    }
    async mintToken(dto) {
        return await this.tokenService.mintToken(dto);
    }
    async transferToken(dto) {
        console.log('controlador: ', dto);
        return await this.tokenService.transferToken(dto);
    }
};
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_template_dto_1.CreateTemplateDto]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "createTemplate", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "getTemplates", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(':typeId'),
    __param(0, (0, common_1.Param)('typeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "getTemplateById", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mint_token_dto_1.MintTokenDto]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "mintToken", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('token/transfer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transfer_token_dto_1.TransferTokenDto]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "transferToken", null);
TokenController = __decorate([
    (0, common_1.Controller)('template'),
    __metadata("design:paramtypes", [token_service_1.TokenService])
], TokenController);
exports.TokenController = TokenController;
//# sourceMappingURL=token.controller.js.map