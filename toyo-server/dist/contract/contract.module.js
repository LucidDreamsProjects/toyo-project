"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/services/auth.service");
const contract_controller_1 = require("./controllers/contract.controller");
const contract_repository_1 = require("./repositories/contract.repository");
const contract_service_1 = require("./services/contract.service");
let ContractModule = class ContractModule {
};
ContractModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([contract_repository_1.ContractRepository]),
            axios_1.HttpModule.register({
                timeout: 12500,
                maxRedirects: 5,
            }),
            auth_service_1.AuthService,
        ],
        controllers: [contract_controller_1.ContractController],
        providers: [contract_service_1.ContractService, auth_service_1.AuthService],
        exports: [contract_service_1.ContractService],
    })
], ContractModule);
exports.ContractModule = ContractModule;
//# sourceMappingURL=contract.module.js.map