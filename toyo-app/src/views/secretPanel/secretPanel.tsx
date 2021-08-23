import { useEffect, useState } from "preact/hooks";
import { ArkaneConnect } from "@arkane-network/arkane-connect";
import axios from "axios";

import logo from "../../../assets/images/luciddreams.jpg";
import box1 from "../../../assets/images/box1.jpg";
import box2 from "../../../assets/images/box2.jpg";
import box3 from "../../../assets/images/box3.jpg";

import { useWindowSize } from "../../hooks/useWindowSize";
import { mintNft } from "../../services/nft/mintNft";
import { getNfts } from "../../services/nft/getNfts";
import { transferNft } from "../../services/nft/transferNft";

import { FunctionalComponent } from "preact";
import { Background, Section, Column, Row, Form, NeonButton } from "./styles";
import { authPlayer } from "../../services/auth/authPlayer";

interface SecretPanelProps {
  arkaneConnect: ArkaneConnect;
}

export const SecretPanel: FunctionalComponent<SecretPanelProps> = (
  props
): JSX.Element => {
  let [width, height] = useWindowSize();
  const adminWallet = "0xb03466dFC417f4163fcae65CA220a2D074b5e1e9";
  const playerWallet = "0x0Ed0939D1b9673629EDBA7807a5Ed115Fc86b54A";

  async function handleInit() {
    console.log(`👷 Welcome to Toyo's official webpage!`);

    if (props.arkaneConnect !== undefined) {
      console.log(`👷 Device online and ready to go!`);
    }
  }

  useEffect(() => {
    handleInit();
  }, []);

  return (
    <html>
      <body>
        <Background>
          <Section>
            <div id="btn--login">
              <NeonButton onClick={() => authPlayer(props.arkaneConnect)}>
                LOGIN
              </NeonButton>
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
