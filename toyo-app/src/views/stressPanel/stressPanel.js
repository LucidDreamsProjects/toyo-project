import React, { useEffect } from "react";
import { getProfile } from "../../domain/player/services/getProfile";
import { findPlayerById } from "../../domain/player/services/findPlayerById";

export function StressPanel(props) {
  console.log(props);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const handleAuthPlayer = async (arkaneConnect) => {
    await sleep(10000);

    console.log("handleAuthPlayer: ", arkaneConnect);

    const profile = await getProfile(props.arkaneConnect);

    if (profile) {
      const playerId = profile.userId;
      const existingPlayer = await findPlayerById(playerId);

      if (existingPlayer) {
        const player = {
          playerId: existingPlayer.playerId,
          firstName: existingPlayer.firstName,
          lastName: existingPlayer.lastName,
          email: existingPlayer.email,
        };

        alert("TESTE: Player encontrado", player);
      }
    } else {
      alert("TESTE: Player inexistente");
    }
  };

  const authPlayer = async (arkaneConnect) => {
    console.log("AUTHPLAYER: ", arkaneConnect);

    await arkaneConnect.flows
      .authenticate({ windowMode: "POPUP" })
      .then((result) => {
        result.authenticated((auth) => {
          console.log(`👷 User authenticated: ${auth.authenticated}`);
          handleAuthPlayer();
        });

        result.notAuthenticated((auth) => {
          console.log("👷 User couldn't be authenticated");
        });
      });
  };

  useEffect(() => {
    authPlayer(props.arkaneConnect);
  }, []);

  return <></>;
}
