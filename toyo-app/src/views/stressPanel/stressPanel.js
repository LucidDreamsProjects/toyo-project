import React, { useEffect } from "react";
import { getProfile } from "../../domain/player/services/getProfile";
import { findPlayerById } from "../../domain/player/services/findPlayerById";

export function StressPanel(props) {
  const handleAuthPlayer = async (arkaneConnect) => {
    const profile = await getProfile(arkaneConnect);

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
    return await arkaneConnect.flows
      .authenticate({ windowMode: "POPUP" })
      .then((result) => {
        result.authenticated((auth) => {
          console.log(`👷 User authenticated: ${auth.authenticated}`);
          handleAuthPlayer(arkaneConnect);
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
