import React, { useEffect, useState } from "react";
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
} from "./styles";
import { useWindowSize } from "../../domain/global/hooks/useWindowSize";
import { getProfile } from "../../domain/player/services/getProfile";
import { findPlayerById } from "../../domain/player/services/findPlayerById";
import { savePlayer } from "../../domain/player/services/savePlayer";
import { getWallets } from "../../domain/wallet/services/getWallets";
import { manageWallets } from "../../domain/wallet/services/manageWallets";
import { transferToken } from "../../domain/token/services/transferToken";
import { getNfts } from "../../domain/token/services/getNftByAddress";

export function AlternativePanel(props) {
  const initialState = {
    playerId: "",
    firstName: "",
    lastName: "",
    email: "",
    wallet: {},
  };

  let [width, height] = useWindowSize();
  let [player, setPlayer] = useState(initialState);
  let [auth, isAuth] = useState(false);
  let [loading, isLoading] = useState(false);

  const handleTransfer = async (arkaneConnect, typeId, quantity, value) => {
    isLoading(true);

    if (!player.wallet) {
      console.group("👷 Please register a wallet before mint");
      isLoading(false);
      return;
    }

    const walletId = player.wallet.id;
    const adminAddress = "0xaC17244Cd4F718A7a9a2c4dfF2f9C7775934824D";
    // const tokenAddress = "0xbeB2d63b25002b8959945B0a01aF0D64bf1ddED1";
    const secretType = "MATIC";
    const totalValue = value * quantity;

    const transactionRequest = {
      walletId,
      to: adminAddress,
      value: totalValue,
      secretType,
    };

    const mintRequest = {
      address: player.wallet.address,
      typeId,
      quantity,
    };

    const signerResult = await transferToken(
      arkaneConnect,
      transactionRequest,
      mintRequest
    );

    isLoading(false);
  };

  const handlePlayerWallet = async (arkaneConnect) => {
    let wallets = await getWallets(props.arkaneConnect);

    console.log("wallets: ", wallets);
    if (wallets.length !== 0) {
      console.log("👷 Setting up your wallet...");
      await setPlayer((prevState) => ({ ...prevState, wallet: wallets[0] }));
    } else {
      console.log("👷 Preparing a new wallet for you...");
      await manageWallets(props.arkaneConnect);
      wallets = await getWallets(props.arkaneConnect);
      await setPlayer((prevState) => ({ ...prevState, wallet: wallets[0] }));
    }

    /* const updatePlayerWalletDto = {
      wallets: wallets[0].address,
    };

    console.log(player.playerId, updatePlayerWalletDto);
    await updatePlayer(player.playerId, updatePlayerWalletDto); */
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
        await setPlayer({
          playerId: existingPlayer.playerId,
          firstName: existingPlayer.firstName,
          lastName: existingPlayer.lastName,
          email: existingPlayer.email,
        });
      } else {
        console.log("👷 Don't worry, we'll set you up on the action 😉!");

        const newPlayer = {
          playerId: playerId,
          firstName: firstName,
          lastName: lastName,
          email: email,
          wallets: null,
        };

        await setPlayer({
          playerId: playerId,
          firstName: firstName,
          lastName: lastName,
          email: email,
        });

        await savePlayer(newPlayer);
      }
    }

    await handlePlayerWallet(props.arkaneConnect);

    isLoading(false);
  };

  const authPlayer = async (arkaneConnect) => {
    return await arkaneConnect.flows
      .authenticate({ windowMode: "POPUP" })
      .then((result) => {
        result.authenticated((auth) => {
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
    console.log(player);
  }, [player]);

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
          {/* {auth === true ? (
            <button
              type="action"
              onClick={() => handlePlayerWallet(props.arkaneConnect)}
              disabled={loading}
            >
              CONNECT WALLET
            </button>
          ) : (
            <span />
          )} */}
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
          <button
            type="action"
            onClick={() => getNfts(props.arkaneConnect, player.wallet.address)}
            disabled={loading}
          >
            GET NFTS
          </button>
        </div>
      </div>
    </div>
  );
}
