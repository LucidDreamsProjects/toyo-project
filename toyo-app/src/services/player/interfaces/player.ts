import { Wallet } from "@arkane-network/arkane-connect";

export interface Player {
  playerId: string | undefined;
  index?: number | undefined;
  username?: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  wallets: string;
}
