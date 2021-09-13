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
exports.PlayerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const player_repository_1 = require("../repositories/player.repository");
let PlayerService = class PlayerService {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }
    async savePlayer(savePlayerDto) {
        return await this.playerRepository.savePlayer(savePlayerDto);
    }
    async findAll() {
        return await this.playerRepository.findAll();
    }
    async findOne(playerId) {
        const player = await this.playerRepository.findOne(playerId);
        if (!player) {
            throw new common_1.NotFoundException(`Player not found`);
        }
        return player;
    }
    async update(playerId, updatePlayerDto) {
        const player = await this.playerRepository.findOne(playerId);
        if (!player) {
            throw new common_1.NotFoundException(`Player not found`);
        }
        const updatedPlayer = await this.playerRepository.editPlayer(playerId, updatePlayerDto);
        return updatedPlayer;
    }
    async remove(playerId) {
        await this.playerRepository.delete(playerId);
    }
};
PlayerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_repository_1.PlayerRepository)),
    __metadata("design:paramtypes", [player_repository_1.PlayerRepository])
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map