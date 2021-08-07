import { ArkaneConnect } from "@arkane-network/arkane-connect";

const getUserProfile = async (arkaneConnect: ArkaneConnect): Promise<void | Profile> => {
  const profile = await arkaneConnect.api
    .getProfile()
    .then((profile) => {
      console.log(profile);
      return profile;
    })
    .catch((error) => {
      console.error(error);
    });

  return profile;
};