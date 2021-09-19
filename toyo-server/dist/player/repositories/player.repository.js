"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerRepository = void 0;
const typeorm_1 = require("typeorm");
const player_entity_1 = require("../entities/player.entity");
const common_1 = require("@nestjs/common");
let PlayerRepository = class PlayerRepository extends typeorm_1.Repository {
    async findAll() {
        return await this.find();
    }
    async findById(playerId) {
        const player = await this.findOne(playerId);
        if (player) {
            console.log(player);
        }
        return player;
    }
    async savePlayer(savePlayerDto) {
        const { playerId, firstName, lastName, email, wallets } = savePlayerDto;
        const player = new player_entity_1.Player();
        player.playerId = playerId;
        player.firstName = firstName;
        player.lastName = lastName;
        player.email = email;
        player.wallets = JSON.stringify(wallets);
        await this.save(player);
        return player;
    }
    async editPlayer(playerId, updatePlayerDto) {
        const { username, firstName, lastName, email, wallets } = updatePlayerDto;
        const player = await this.findOne(playerId);
        if (player) {
            player.username = username;
            player.firstName = firstName;
            player.lastName = lastName;
            player.email = email;
            player.wallets = wallets;
            await this.save(player);
            return player;
        }
    }
    async destroy(playerId) {
        const player = await this.findOne(playerId);
        if (player) {
            await this.remove(player);
        }
    }
};
PlayerRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(player_entity_1.Player)
], PlayerRepository);
exports.PlayerRepository = PlayerRepository;
//# sourceMappingURL=player.repository.js.map