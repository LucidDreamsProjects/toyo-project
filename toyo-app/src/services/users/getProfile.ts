import { ArkaneConnect, Profile } from "@arkane-network/arkane-connect";

async function getProfile(
  arkaneConnect: ArkaneConnect
): Promise<void | Profile> {
  const profile = await arkaneConnect.api
    .getProfile()
    .then((profile) => {
      console.log(`👷 User profile: ${profile}`);
      return profile;
    })
    .catch((error) => {
      console.error(error);
    });

  return profile;
}

export default getProfile;
