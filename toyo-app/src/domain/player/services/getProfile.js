export async function getProfile(arkaneConnect) {
  const profile = await arkaneConnect.api
    .getProfile()
    .then((profile) => {
      // console.log(`👷 User profile: `, profile);
      return profile;
    })
    .catch((error) => {
      console.error(error);
    });

  if (profile) {
    return profile;
  }
}
