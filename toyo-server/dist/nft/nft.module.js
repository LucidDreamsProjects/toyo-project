"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NftModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/services/auth.service");
const nft_controller_1 = require("./controllers/nft.controller");
const nft_service_1 = require("./services/nft.service");
const nft_repository_1 = require("./repositories/nft.repository");
const template_repository_1 = require("./repositories/template.repository");
let NftModule = class NftModule {
};
NftModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([nft_repository_1.NftRepository, template_repository_1.TemplateRepository]),
            axios_1.HttpModule.register({
                timeout: 15000,
                maxRedirects: 5,
            }),
        ],
        controllers: [nft_controller_1.NftController],
        providers: [nft_service_1.NftService, auth_service_1.AuthService],
        exports: [nft_service_1.NftService],
    })
], NftModule);
exports.NftModule = NftModule;
//# sourceMappingURL=nft.module.js.map