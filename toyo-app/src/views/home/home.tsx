import { useEffect, useState } from "preact/hooks";
import { ArkaneConnect, WindowMode } from "@arkane-network/arkane-connect";
import axios from "axios";

import logo from "../../../assets/images/luciddreams.jpg";
import box1 from "../../../assets/images/box1.jpg";
import box2 from "../../../assets/images/box2.jpg";
import box3 from "../../../assets/images/box3.jpg";

import { useWindowSize } from "../../hooks/useWindowSize";
import { createWallet } from "../../services/wallet/createWallet";
import { mintNft } from "../../services/nft/mintNft";
import { getNfts } from "../../services/nft/getNfts";
import { transferNft } from "../../services/nft/transferNft";
import { SavePlayerDto } from "../../dto/save-player.dto";

import { FunctionalComponent } from "preact";
import { KeycloakInstance } from "keycloak-js";
import { Background, Section, Column, Row, Form, NeonButton } from "./styles";
import { AuthenticationResult } from "@arkane-network/arkane-connect/dist/src/connect/connect";

interface HomeProps {
  arkaneConnect: ArkaneConnect;
}

export const Home: FunctionalComponent<HomeProps> = (props): JSX.Element => {
  let [width, height] = useWindowSize();
  let [isLogged, setIsLogged] = useState(false);
  let [player, setPlayer] = useState({});
  const adminWallet = "0xb03466dFC417f4163fcae65CA220a2D074b5e1e9";
  const playerWallet = "0x0Ed0939D1b9673629EDBA7807a5Ed115Fc86b54A";

  async function handleInit() {
    console.log(`👷 Welcome to Toyo's official webpage!`);
    // console.log(`👷 User is logged? ${isLogged}`);

    if (props.arkaneConnect !== undefined) {
      console.log(`👷 Device online and ready to go!`);
    }
  }

  async function authPlayer(): Promise<void> {
    let player: Record<string, string | undefined> | void = {};
    // let wallet: string;

    player = await props.arkaneConnect.flows
      .authenticate({ windowMode: "POPUP" as WindowMode })
      .then((result: AuthenticationResult) => {
        result.authenticated((auth: KeycloakInstance) => {
          player = {
            playerID: auth.subject!,
            email: auth.tokenParsed!.email,
            sessionState: auth.tokenParsed!.session_state,
          };
          console.log(auth);
          return player;
        });
        result.notAuthenticated((auth: undefined | KeycloakInstance) => {
          //? Maybe we should use some better error handling here...
          console.log("👷 User couldn't be logged in");
        });
      });

    /* if (player !== {}) {
      await setIsLogged(true);
      await setPlayer(player!);
      console.log(player);

      if (!player!.wallet) {
        //TODO: Create a wallet
        const newWallet = await createWallet(props.arkaneConnect);
        console.log(`👷 wallet address: ${newWallet!.address}`);
        player!.wallet = newWallet?.address;
      }
    }

    //TODO: Create a player on our MySQL database
    if (player?.wallet) {
      //TODO: Show this info on UI
      const newPlayer = {
        playerID: player.playerID,
        sessionState: player.sessionState,
        email: player.email,
        wallet: player.wallet,
      };
      await setPlayer(player);
    } */
  }

  useEffect(() => {
    handleInit();
  }, []);

  return (
    <html>
      <body>
        <Background>
          <Section>
            {/* <img src={logo} alt="" /> */}
            <div id="btn--login">
              <NeonButton onClick={() => authPlayer()}>LOGIN</NeonButton>
            </div>
            <Row width="50%">
              <Column>
                <div class="text--simple">ADMIN WALLET {adminWallet}</div>
                <button
                  class="text--simple btn--simple"
                  onClick={() => getNfts(props.arkaneConnect, adminWallet)}
                >
                  CHECK ADMIN NFTs
                </button>
              </Column>
              <Column>
                <div class="text--simple">PLAYER WALLET {playerWallet}</div>
                <button
                  class="text--simple btn--simple"
                  onClick={() => getNfts(props.arkaneConnect, playerWallet)}
                >
                  CHECK PLAYER NFTs
                </button>
              </Column>
            </Row>
            <div id="btn--transfer">
              <button
                class="text--simple btn--simple"
                onClick={() => transferNft(props.arkaneConnect)}
              >
                TRANSFER NFT BETWEEN WALLETS
              </button>
            </div>
            <Row width="75%">
              <Column id="boxes">
                <div onClick={() => mintNft(101, [playerWallet])}>
                  <div class="text--simple">WARRIOR BOX</div>
                  <img class="img--simple" src={box1} />
                </div>
                <div onClick={() => mintNft(51, [playerWallet])}>
                  <div class="text--simple">HERO BOX</div>
                  <img class="img--simple" src={box2} />
                </div>
                <div onClick={() => mintNft(1, [playerWallet])}>
                  <div class="text--simple">EPIC BOX</div>
                  <img class="img--simple" src={box3} />
                </div>
              </Column>
            </Row>
          </Section>
        </Background>
      </body>
    </html>
  );
};
