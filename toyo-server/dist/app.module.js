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
const template_entity_1 = require("./token/entities/template.entity");
const player_entity_1 = require("./player/entities/player.entity");
const token_entity_1 = require("./token/entities/token.entity");
const auth_module_1 = require("./auth/auth.module");
const contract_module_1 = require("./contract/contract.module");
const token_module_1 = require("./token/token.module");
const wallet_module_1 = require("./wallet/wallet.module");
const dotenv_1 = require("dotenv");
const transaction_module_1 = require("./transaction/transaction.module");
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
                username: `toyoverse`,
                password: `=N3Z8L4V6+SE`,
                database: `toyovers_universe`,
                entities: [player_entity_1.Player, token_entity_1.Token, template_entity_1.Template, contract_entity_1.Contract],
                logging: false,
                synchronize: false,
                keepConnectionAlive: true,
            }),
            auth_module_1.AuthModule,
            player_module_1.PlayerModule,
            contract_module_1.ContractModule,
            token_module_1.TokenModule,
            wallet_module_1.WalletModule,
            transaction_module_1.TransactionModule,
        ],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map