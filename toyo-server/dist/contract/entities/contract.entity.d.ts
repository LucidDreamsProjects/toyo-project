import { BaseEntity } from 'typeorm';
export declare class Contract extends BaseEntity {
    contractId?: number;
    name?: string;
    description?: string;
    chain?: string;
    symbol?: string;
    externalUrl?: string;
}
