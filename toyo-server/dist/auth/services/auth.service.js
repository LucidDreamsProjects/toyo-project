"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
let AuthService = class AuthService {
    constructor() {
        this.SECRET_KEY = `${process.env.SECRET_KEY}`;
        this.GOOGLE_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${this.SECRET_KEY}&response=`;
        this.DATA_URL = `${process.env.AUTHENTICATION_ENDPOINT}/auth/realms/Arkane/protocol/openid-connect/token`;
        this.GRANT_TYPE = `${process.env.GRANT_TYPE}`;
        this.CLIENT_ID = `${process.env.VENLY_ID}`;
        this.CLIENT_SECRET = `${process.env.VENLY_SECRET}`;
    }
    async getCredentials() {
        const url = this.DATA_URL;
        const grantType = this.GRANT_TYPE;
        const clientId = this.CLIENT_ID;
        const clientSecret = this.CLIENT_SECRET;
        const params = new URLSearchParams();
        params.append('grant_type', `${grantType}`);
        params.append('client_id', `${clientId}`);
        params.append('client_secret', `${clientSecret}`);
        return await axios_1.default
            .post(url, params.toString())
            .then((response) => {
            return response.data;
        })
            .catch((error) => console.log(error));
    }
    async getAccessToken() {
        const credentials = await this.getCredentials();
        if (credentials) {
            const accessToken = credentials.access_token;
            return accessToken;
        }
    }
    async validateHuman(token) {
        const url = this.GOOGLE_URL + token;
        return await axios_1.default
            .post(url)
            .then((response) => {
            console.log(response.data);
            return response.data;
        })
            .catch((error) => {
            console.log(error);
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map