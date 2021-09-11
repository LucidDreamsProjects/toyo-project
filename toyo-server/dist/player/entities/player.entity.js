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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const typeorm_1 = require("typeorm");
let Player = class Player extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Player.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Player.prototype, "index", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], Player.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 128 }),
    __metadata("design:type", String)
], Player.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], Player.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 128 }),
    __metadata("design:type", String)
], Player.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 128 }),
    __metadata("design:type", String)
], Player.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Player.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 512 }),
    __metadata("design:type", String)
], Player.prototype, "replays", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Player.prototype, "inventory", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', unique: true }),
    __metadata("design:type", String)
], Player.prototype, "wallets", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 3 }),
    __metadata("design:type", Number)
], Player.prototype, "role", void 0);
Player = __decorate([
    (0, typeorm_1.Entity)({ name: 'player_User' })
], Player);
exports.Player = Player;
//# sourceMappingURL=player.entity.js.map