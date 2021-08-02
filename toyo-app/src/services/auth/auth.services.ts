import { WindowMode } from "@arkane-network/arkane-connect";
import { Arkane } from "@arkane-network/web3-arkane-provider";

export default function venlyLogin() {
  Arkane.authenticate({
    redirectUri: "http://localhost:3000",
    windowMode: "POPUP" as WindowMode,
  });
}
