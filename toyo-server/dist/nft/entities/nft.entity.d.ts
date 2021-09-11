import { BaseEntity } from 'typeorm';
export declare class Nft extends BaseEntity {
    nftId?: number;
    templateId?: number;
    contractId?: number;
    name?: string;
    value?: number;
}
