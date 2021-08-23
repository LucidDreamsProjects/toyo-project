import { ArkaneConnect, WindowMode } from "@arkane-network/arkane-connect";
import { AuthenticationResult } from "@arkane-network/arkane-connect/dist/src/connect/connect";
import { createWallet } from "../wallet/createWallet";
import { savePlayer } from "../player/savePlayer";
import { findPlayerById } from "../player/findPlayerById";
import { KeycloakInstance } from "keycloak-js";

export async function authPlayer(): Promise<void> {
  const auth = await props.arkaneConnect.flows
    .authenticate({ windowMode: "POPUP" as WindowMode })
    .then((result: AuthenticationResult) => {
      result.authenticated((auth: KeycloakInstance) => {
        const _auth = {
          playerID: auth.subject!,
          email: auth.tokenParsed!.email,
          sessionState: auth.tokenParsed!.session_state,
        };
        return _auth;
      });
      result.notAuthenticated((auth: undefined | KeycloakInstance) => {
        console.log("👷 User couldn't be logged in");
      });
    });

  let player = await findPlayerById(auth.playerID);

  if (player) {
    if (player.wallet === undefined) {
      const wallet = await createWallet(props.arkaneConnect);

      if (wallet) {
        console.log(`👷 your wallet address: ${wallet.address}`);
        player.wallet = wallet.address;

        await savePlayer(player);
      }
    }

    const player = await findPlayerById(player.playerID);

    if (wallet) {
      console.log(`👷 your wallet address: ${wallet}`);
    }
  }
}
