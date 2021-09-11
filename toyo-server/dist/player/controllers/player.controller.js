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
exports.PlayerController = void 0;
const common_1 = require("@nestjs/common");
const save_player_dto_1 = require("../dto/save-player.dto");
const update_player_dto_1 = require("../dto/update-player.dto");
const player_service_1 = require("../services/player.service");
let PlayerController = class PlayerController {
    constructor(playerService) {
        this.playerService = playerService;
    }
    async findAll() {
        return await this.playerService.findAll();
    }
    async findOne(playerId) {
        return await this.playerService.findOne(playerId);
    }
    async savePlayer(savePlayerDto) {
        return await this.playerService.savePlayer(savePlayerDto);
    }
    async update(playerId, updatePlayerDto) {
        return await this.playerService.update(playerId, updatePlayerDto);
    }
    async deleteByPlayerId(playerId) {
        const player = await this.playerService.findOne(playerId);
        if (!player) {
            throw new common_1.NotFoundException(`Player not found`);
        }
        return await this.playerService.remove(playerId);
    }
};
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "findAll", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(':playerId'),
    __param(0, (0, common_1.Param)('playerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "findOne", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_player_dto_1.SavePlayerDto]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "savePlayer", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Patch)(':playerId'),
    __param(0, (0, common_1.Param)('playerId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_player_dto_1.UpdatePlayerDto]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':playerId'),
    __param(0, (0, common_1.Param)('playerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "deleteByPlayerId", null);
PlayerController = __decorate([
    (0, common_1.Controller)('player'),
    __metadata("design:paramtypes", [player_service_1.PlayerService])
], PlayerController);
exports.PlayerController = PlayerController;
//# sourceMappingURL=player.controller.js.map