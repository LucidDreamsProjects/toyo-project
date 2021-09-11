"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const player_module_1 = require("./player/player.module");
const app_controller_1 = require("./app.controller");
const contract_entity_1 = require("./contract/entities/contract.entity");
const template_entity_1 = require("./nft/entities/template.entity");
const player_entity_1 = require("./player/entities/player.entity");
const nft_entity_1 = require("./nft/entities/nft.entity");
const auth_module_1 = require("./auth/auth.module");
const contract_module_1 = require("./contract/contract.module");
const nft_module_1 = require("./nft/nft.module");
const wallet_module_1 = require("./wallet/wallet.module");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '162.240.6.22',
                port: 3306,
                username: `wwtoyo_admin`,
                password: `dd^8A!DPq#ZpjewF2`,
                database: `wwtoyo_universe`,
                entities: [player_entity_1.Player, nft_entity_1.Nft, template_entity_1.Template, contract_entity_1.Contract],
                logging: false,
                synchronize: false,
                keepConnectionAlive: true,
            }),
            auth_module_1.AuthModule,
            wallet_module_1.WalletModule,
            player_module_1.PlayerModule,
            contract_module_1.ContractModule,
            nft_module_1.NftModule,
        ],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map