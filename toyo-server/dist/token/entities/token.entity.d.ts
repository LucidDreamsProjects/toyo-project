import { BaseEntity } from 'typeorm';
export declare class Token extends BaseEntity {
    tokenId?: number;
    templateId?: number;
    contractId?: number;
    name?: string;
    fungible?: boolean;
    owner?: string;
    transactionHash?: string;
}
