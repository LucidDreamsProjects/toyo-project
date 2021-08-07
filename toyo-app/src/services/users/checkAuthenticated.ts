import { ArkaneConnect } from "@arkane-network/arkane-connect";
import { AuthenticationResult } from "@arkane-network/arkane-connect/dist/src/connect/connect";

async function checkAuthenticated(
  arkaneConnect: ArkaneConnect
): Promise<AuthenticationResult> {
  let result = await arkaneConnect
    .checkAuthenticated()
    .then((result) => {
      console.log(`👷 Checking result: ${result}`);
      return result;
    })
    .catch((error) => {
      console.debug(error);
    });

  return result!;
}

export default checkAuthenticated;
