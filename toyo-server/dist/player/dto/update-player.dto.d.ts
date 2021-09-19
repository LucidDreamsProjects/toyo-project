import { SavePlayerDto } from './save-player.dto';
declare const UpdatePlayerDto_base: import("@nestjs/mapped-types").MappedType<Partial<SavePlayerDto>>;
export declare class UpdatePlayerDto extends UpdatePlayerDto_base {
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    wallets?: string;
}
export {};
