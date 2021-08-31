export async function authPlayer(arkaneConnect) {
  return await arkaneConnect.flows
    .authenticate({ windowMode: "POPUP" })
    .then((result) => {
      result.authenticated((auth) => {
        console.log("👷 User logged in: ", auth);
      });

      result.notAuthenticated((auth) => {
        console.log("👷 User couldn't be logged in");
      });
    });
}
