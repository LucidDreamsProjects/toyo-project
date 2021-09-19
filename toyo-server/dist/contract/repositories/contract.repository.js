"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractRepository = void 0;
const typeorm_1 = require("typeorm");
const contract_entity_1 = require("../entities/contract.entity");
const common_1 = require("@nestjs/common");
let ContractRepository = class ContractRepository extends typeorm_1.Repository {
    async saveContract(dto) {
        const { contractId, name, description, chain, symbol, externalUrl } = dto;
        const contract = new contract_entity_1.Contract();
        contract.contractId = contractId;
        contract.name = name;
        contract.description = description;
        contract.chain = chain;
        contract.symbol = symbol;
        contract.externalUrl = externalUrl;
        await this.save(contract);
        return contract;
    }
};
ContractRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(contract_entity_1.Contract)
], ContractRepository);
exports.ContractRepository = ContractRepository;
//# sourceMappingURL=contract.repository.js.map