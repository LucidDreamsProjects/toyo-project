import { BaseEntity } from 'typeorm';
export declare class Player extends BaseEntity {
    playerId?: string;
    index?: number;
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    wallets?: string;
    role?: number;
}
