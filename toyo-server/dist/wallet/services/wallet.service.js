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
exports.WalletService = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../auth/services/auth.service");
const axios_1 = require("axios");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
let WalletService = class WalletService {
    constructor(authService) {
        this.authService = authService;
        this.BASE_URL = process.env.WALLET_API_ENDPOINT;
    }
    async getWalletById(walletId) {
        const url = `${this.BASE_URL}/api/wallets/` + walletId;
        console.log('service URL: ', url);
        const accessToken = await this.authService.getAccessToken();
        return await axios_1.default
            .get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => {
            console.log('service response: ', response.data);
            return response.data;
        })
            .catch((error) => console.log(error));
    }
};
WalletService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], WalletService);
exports.WalletService = WalletService;
//# sourceMappingURL=wallet.service.js.map