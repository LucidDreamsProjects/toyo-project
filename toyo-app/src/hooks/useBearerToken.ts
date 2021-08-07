import { ArkaneConnect } from "@arkane-network/arkane-connect";

async function useBearerToken(
  arkaneConnect?: ArkaneConnect,
  _bearerToken?: string
) {
  await arkaneConnect?.addOnTokenRefreshCallback((token) => {
    console.log(`👷 New refreshed token: ${token}`);
    return token;
  });

  if (_bearerToken) {
    return _bearerToken;
  }
}

export default useBearerToken;
