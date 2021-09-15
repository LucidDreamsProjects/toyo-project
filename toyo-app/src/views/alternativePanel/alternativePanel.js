import React, { useCallback, useEffect, useState } from "react";

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
import { updatePlayer } from "../../domain/player/services/updatePlayer";
import { getWallets } from "../../domain/wallet/services/getWallets";
import { manageWallets } from "../../domain/wallet/services/manageWallets";
import { transferNftToken } from "../../domain/token/services/transferNftToken";
import { transferToken } from "../../domain/token/services/transferToken";
import { mintToken } from "../../domain/token/services/mintToken";
import { getFees } from "../../domain/transaction/services/getFees";
import { getTxStatus } from "../../domain/transaction/services/getTxStatus";
import { getWalletById } from "../../domain/wallet/services/getWalletById";

export function AlternativePanel(props) {
  let [width, height] = useWindowSize();
  let [player, setPlayer] = useState({});
  let [auth, isAuth] = useState(false);
  let [loading, isLoading] = useState(false);

  const handleTransfer = async (arkaneConnect, typeId, quantity, value) => {
    isLoading(true);

    if (!player.wallets) {
      isLoading(false);
      return;
    }

    const fees = await getFees("MATIC");
    console.log(fees);

    const walletId = player.wallets[0].id;
    const adminAddress = "0xaC17244Cd4F718A7a9a2c4dfF2f9C7775934824D";
    const tokenAddress = "0xbeB2d63b25002b8959945B0a01aF0D64bf1ddED1";
    const secretType = "MATIC";

    const transactionRequest = {
      walletId,
      to: adminAddress,
      value,
      secretType,
      value: 0.1,
    };

    const signerResult = await transferToken(arkaneConnect, transactionRequest);
    console.log(signerResult);

    // const transactionStatus = await getTxStatus("MATIC", signerResult.status);
    // console.log(transactionStatus);

    isLoading(false);
  };

  const handlePlayerWallet = async (arkaneConnect) => {
    isLoading(true);

    if (player.wallets) {
      const wallet = await getWalletById(player.wallets);
      // await setPlayer({ ...player, wallets: wallet });
      // return;
    }

    await manageWallets(props.arkaneConnect);

    const wallet = await getWallets(props.arkaneConnect);

    if (wallet.length !== 1) {
      console.log(`👷 Select a single wallet. Please, repeat the process`);
      isLoading(false);
      return;
    } else {
      console.log(`👷 your wallet: `, wallet);
    }

    await setPlayer({ ...player, wallets: wallet });

    const updatePlayerWalletDto = {
      wallets: wallet[0].id,
    };

    await updatePlayer(player.playerId, updatePlayerWalletDto);
    isLoading(false);
  };

  const handleAuthPlayer = async (arkaneConnect) => {
    isLoading(true);
    const profile = await getProfile(props.arkaneConnect);

    if (profile) {
      const playerId = profile.userId;
      const firstName = profile.firstName;
      const lastName = profile.lastName;
      const email = profile.email;

      const existingPlayer = await findPlayerById(playerId);

      if (existingPlayer) {
        const _player = {
          playerId: existingPlayer.playerId,
          firstName: existingPlayer.firstName,
          lastName: existingPlayer.lastName,
          email: existingPlayer.email,
          wallets: existingPlayer.wallets,
        };
        await setPlayer(_player);
        console.log(`👷 your info: `, _player);
      } else {
        console.log("👷 Don't worry, we'll set you up on the action 😉!");

        const newPlayer = {
          playerId: playerId,
          firstName: firstName,
          lastName: lastName,
          email: email,
          wallets: null,
        };

        await setPlayer(newPlayer);
        await savePlayer(newPlayer);
        console.log(`👷 your info: `, newPlayer);
      }
    }
    isLoading(false);
  };

  const authPlayer = async (arkaneConnect) => {
    return await arkaneConnect.flows
      .authenticate({ windowMode: "POPUP" })
      .then((result) => {
        result.authenticated((auth) => {
          console.log(auth);
          console.log(`👷 User authenticated: ${auth.authenticated}`);
          handleAuthPlayer();
          isAuth(true);
        });

        result.notAuthenticated((auth) => {
          console.log("👷 User couldn't be authenticated");
        });
      });
  };

  const handleInit = async () => {
    console.log(`👷 Welcome to Toyo's official webpage!`);

    if (props.arkaneConnect !== undefined) {
      console.log(`👷 Device online and ready to go!`);
    }

    console.log(auth);

    console.log(`👷 actual player: `, player);
  };

  useEffect(() => {
    handleInit();
  }, []);

  return (
    <div id="body">
      <div id="canvas">
        <div>PRESS F12</div>
        <div id="user-auth">
          <button
            type="action"
            onClick={() => authPlayer(props.arkaneConnect)}
            disabled={loading}
          >
            CONNECT WITH VENLY
          </button>
          {auth === true ? (
            <button
              type="action"
              onClick={() => handlePlayerWallet(props.arkaneConnect)}
              disabled={loading}
            >
              CONNECT WALLET
            </button>
          ) : (
            <span />
          )}
        </div>
      </div>
      <div id="canvas">
        <div id="buy-token">
          <button
            type="action"
            onClick={() => handleTransfer(props.arkaneConnect, 1, 1, 0.1)}
            disabled={loading}
          >
            BUY KYTUNT LEGACY CHEST
          </button>
        </div>
      </div>
    </div>
  );
}
