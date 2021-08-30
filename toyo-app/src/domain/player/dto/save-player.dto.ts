import { Wallet } from "@arkane-network/arkane-connect";

export interface SavePlayerDto {
  playerId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  wallets: never[] | Wallet[];
}
