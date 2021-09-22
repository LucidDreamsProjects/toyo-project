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
exports.ContractService = void 0;
const axios_1 = require("axios");
const typeorm_1 = require("@nestjs/typeorm");
const contract_repository_1 = require("../repositories/contract.repository");
const create_contract_dto_1 = require("../dto/create-contract.dto");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../auth/services/auth.service");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
let ContractService = class ContractService {
    constructor(contractRepository, authService) {
        this.contractRepository = contractRepository;
        this.authService = authService;
        this.DATA_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${process.env.APPLICATION_ID}/contracts`;
    }
    async createContract(dto) {
        const accessToken = await this.authService.getAccessToken();
        const url = this.DATA_URL;
        const contract = await axios_1.default
            .post(url, dto, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => {
            console.log(response.data);
            return response.data;
        })
            .catch((error) => console.log(error));
        if (contract) {
            const _contract = {
                contractId: contract.id,
                name: contract.name,
                description: contract.description,
                chain: contract.secretType,
                symbol: contract.symbol,
                externalUrl: contract.externalUrl,
            };
            await this.contractRepository.saveContract(_contract);
        }
        return contract;
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contract_dto_1.CreateContractDto]),
    __metadata("design:returntype", Promise)
], ContractService.prototype, "createContract", null);
ContractService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contract_repository_1.ContractRepository)),
    __metadata("design:paramtypes", [contract_repository_1.ContractRepository,
        auth_service_1.AuthService])
], ContractService);
exports.ContractService = ContractService;
//# sourceMappingURL=contract.service.js.map