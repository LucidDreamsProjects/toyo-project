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
exports.WalletService = void 0;
const save_wallet_1 = require("../dto/save-wallet");
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const dotenv_1 = require("dotenv");
const auth_service_1 = require("../../auth/services/auth.service");
(0, dotenv_1.config)();
let WalletService = class WalletService {
    constructor(authService) {
        this.authService = authService;
        this.DATA_URL = `${process.env.WALLET_API_ENDPOINT}/api/wallets`;
        this.WALLET_TYPE = process.env.WALLET_TYPE;
        this.SECRET_TYPE = process.env.SECRET_TYPE;
    }
    async createWallet(wallet) {
        const accessToken = await this.authService.getAccessToken();
        const walletType = this.WALLET_TYPE;
        const secretType = this.SECRET_TYPE;
        const pincode = wallet.pincode;
        const url = this.DATA_URL;
        const dto = {
            walletType: walletType,
            secretType: secretType,
            pincode: pincode,
        };
        return await axios_1.default
            .post(url, dto, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => {
            console.log(`👷 Generating a new wallet for some unknown purposes...`);
            console.log(response.data);
            return response.data;
        })
            .catch((error) => console.log(error));
    }
    async getWallets() {
        const accessToken = await this.authService.getAccessToken();
        const url = this.DATA_URL;
        return await axios_1.default
            .get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => {
            console.log(`👷 Your wallets: `);
            console.log(response.data);
            return response.data;
        })
            .catch((error) => console.log(error));
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_wallet_1.SaveWalletDto]),
    __metadata("design:returntype", Promise)
], WalletService.prototype, "createWallet", null);
WalletService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], WalletService);
exports.WalletService = WalletService;
//# sourceMappingURL=wallet.service.js.map