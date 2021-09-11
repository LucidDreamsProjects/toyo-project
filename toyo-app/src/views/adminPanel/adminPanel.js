import React from "react";
import { useEffect, useState } from "react";

import box1 from "../../assets/images/box1.png";
import box2 from "../../assets/images/box2.png";

import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

import {
  Body,
  Section,
  Canvas,
  Top,
  Middle,
  Container,
  Row,
  Column,
  UserDisplay,
  Tile,
  ConstrainedTile,
  ImageTile,
  NeonButton,
} from "./styles";
import { useWindowSize } from "../../domain/global/hooks/useWindowSize";
import { getProfile } from "../../domain/player/services/getProfile";
import { findPlayerById } from "../../domain/player/services/findPlayerById";
import { savePlayer } from "../../domain/player/services/savePlayer";
import { getWallets } from "../../domain/wallet/services/getWallets";
import { createContract } from "../../domain/contract/services/createContract";
import { manageWallets } from "../../domain/wallet/services/manageWallets";
import { createTemplate } from "../../domain/nft/services/createTemplate";
import { transferNft } from "../../domain/nft/services/transferNft";
import { mintNft } from "../../domain/nft/services/mintNft";

export function AdminPanel(props) {
  let [width, height] = useWindowSize();
  let [player, setPlayer] = useState({});

  const handleInit = async () => {
    console.log(`👷 Welcome to Toyo's official webpage!`);

    if (props.arkaneConnect !== undefined) {
      console.log(`👷 Device online and ready to go!`);
    }

    console.log(`👷 actual player: `, player);
  };

  const handleAuthPlayer = async () => {
    const player = await getProfile(props.arkaneConnect);

    if (player) {
      const playerId = player.userId;
      const firstName = player.firstName;
      const lastName = player.lastName;
      const email = player.email;
    }
  };

  const authPlayer = async (arkaneConnect) => {
    return await arkaneConnect.flows
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
    handleInit();
  }, []);

  return (
    <div>
      <button onClick={() => authPlayer(props.arkaneConnect)}>
        CONNECT WITH VENLY
      </button>
    </div>
  );
}
