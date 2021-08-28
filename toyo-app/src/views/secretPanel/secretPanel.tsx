import { useEffect, useState } from "preact/hooks";
import {
  ArkaneConnect,
  Wallet,
  WindowMode,
} from "@arkane-network/arkane-connect";
import axios from "axios";

import logo from "../../../assets/images/luciddreams.jpg";
import box1 from "../../../assets/images/box1.jpg";
import box2 from "../../../assets/images/box2.jpg";
import box3 from "../../../assets/images/box3.jpg";
import box4 from "../../../assets/images/box4.jpg";
import box5 from "../../../assets/images/box5.jpg";

import { FunctionalComponent } from "preact";
import { useWindowSize } from "../../domain/global/hooks/useWindowSize";
import { Top, Middle, UserDisplay, NeonButton } from "./styles";
import {
  Section,
  Canvas,
  Container,
  Column,
} from "../../domain/global/components/styles";
import { Tile, ImageTile } from "../../domain/global/components/form/style";
import { NftTemplateForm } from "../../domain/nft/components/nftTemplateForm";
import { SyntheticEvent } from "react";

import { mintNft } from "../../domain/nft/services/mintNft";
import { getNfts } from "../../domain/nft/services/getNfts";
import { transferNft } from "../../domain/nft/services/transferNft";

import { authPlayer } from "../../domain/auth/services/authPlayer";
import { AuthenticationResult } from "@arkane-network/arkane-connect/dist/src/connect/connect";
import { getProfile } from "../../domain/player/services/getProfile";
import { findPlayerById } from "../../domain/player/services/findPlayerById";
import { Player } from "../../domain/player/interfaces/player";
import { savePlayer } from "../../domain/player/services/savePlayer";
import { SavePlayerDto } from "../../domain/player/dto/save-player.dto";
import { KeycloakInstance } from "keycloak-js";

import { Nft } from "../../domain/nft/interfaces/nft";
import { SaveNftDto } from "../../domain/nft/dto/save-nft.dto";
import { createWallet } from "../../domain/wallet/services/createWallet";
import { createNft } from "../../domain/nft/services/createNft";
import { getWallets } from "../../domain/wallet/services/getWallets";

interface SecretPanelProps {
  arkaneConnect: ArkaneConnect;
}

export const SecretPanel: FunctionalComponent<SecretPanelProps> = (
  props
): JSX.Element => {
  let [width, height] = useWindowSize();
  let [player, setPlayer] = useState({} as Player);
  let [logged, isLogged] = useState(false);

  async function handleInit() {
    console.log(`👷 Welcome to Toyo's official webpage!`);

    if (props.arkaneConnect !== undefined) {
      console.log(`👷 Device online and ready to go!`);
    }

    console.log(`👷 isLogged: `, logged);
    console.log(`👷 actual player: `, player);
  }

  const handleGetWalletAddress = async () => {
    const wallet = await getWallets(props.arkaneConnect);
    const address = wallet.result.address;
    player.walletAddress = address;
  };

  const handleAuthPlayer = async () => {
    // FETCH Player from Venly's servers
    const player = await getProfile(props.arkaneConnect);

    // FETCH or CREATE Player from our servers
    if (player) {
      const playerId = player.userId;
      const firstName = player.firstName;
      const lastName = player.lastName;
      const email = player.email;

      const targetPlayer = await findPlayerById(playerId);

      if (targetPlayer) {
        setPlayer(targetPlayer);
        handleGetWalletAddress();
        console.log(`👷 your info: `, targetPlayer);
      } else {
        console.log("👷 Don't worry, we'll set you up on the action 😉!");
        const wallet = createWallet();
        const walletId = wallet.result.id;
        const walletAddress = wallet.result.address;
        const balance = wallet.result.balance;
        const newPlayer = {
          playerId: playerId,
          firstName: firstName,
          lastName: lastName,
          email: email,
          walletId: walletId,
          balance: balance,
        } as SavePlayerDto;

        await savePlayer(newPlayer);

        const _newPlayer = {
          playerId: newPlayer.playerId,
          firstName: newPlayer.firstName,
          lastName: newPlayer.lastName,
          email: newPlayer.email,
          walletId: newPlayer.walletId,
          walletAddress: walletAddress,
          balance: newPlayer.balance,
        };

        setPlayer(_newPlayer);
      }
    }
  };

  const authPlayer = async (arkaneConnect: ArkaneConnect): Promise<void> => {
    return await arkaneConnect.flows
      .authenticate({ windowMode: "POPUP" as WindowMode })
      .then((result: AuthenticationResult) => {
        result.authenticated((auth: KeycloakInstance) => {
          console.log(`👷 User authenticated: ${auth.authenticated}`);
          isLogged(auth.authenticated!);
          handleAuthPlayer();
        });

        result.notAuthenticated((auth: undefined | KeycloakInstance) => {
          console.log("👷 User couldn't be authenticated");
        });
      });
  };

  useEffect(() => {
    handleInit();
  }, []);

  return (
    <html>
      <body>
        <Section>
          <Canvas>
            <Column>
              <Top>
                <div id="ply--balance">$ {player.balance}</div>
                <div id="btn--login">
                  <NeonButton onClick={() => authPlayer(props.arkaneConnect)}>
                    LOGIN
                  </NeonButton>
                </div>
              </Top>
              <Middle>
                <UserDisplay>
                  <Tile>
                    <label htmlFor="id">ID:</label>
                    <div id="id">{player.playerId}</div>
                  </Tile>
                  <Tile>
                    <label htmlFor="name">NAME:</label>
                    <div id="name">
                      {player.firstName} {player.lastName}
                    </div>
                  </Tile>
                  <Tile>
                    <label htmlFor="email">EMAIL:</label>
                    <div id="email">{player.email}</div>
                  </Tile>
                  <Tile>
                    <label htmlFor="id">WALLET:</label>
                    <div id="id">{player.walletId}</div>
                  </Tile>
                </UserDisplay>
              </Middle>
            </Column>
          </Canvas>
        </Section>
        <Section>
          <Canvas>
            <NftTemplateForm />
          </Canvas>
        </Section>
        <Section>
          <Canvas>
            {player ? (
              <Container>
                <ImageTile onClick={() => mintNft(0, [player.walletAddress!])}>
                  <div>WARRIOR BOX</div>
                  <img src={box1} />
                </ImageTile>
                <ImageTile onClick={() => mintNft(0, [player.walletAddress!])}>
                  <div>HERO BOX</div>
                  <img src={box2} />
                </ImageTile>
                <ImageTile onClick={() => mintNft(0, [player.walletAddress!])}>
                  <div>RARE BOX</div>
                  <img src={box3} />
                </ImageTile>
                <ImageTile onClick={() => mintNft(0, [player.walletAddress!])}>
                  <div>EPIC BOX</div>
                  <img src={box4} />
                </ImageTile>
                <ImageTile onClick={() => mintNft(0, [player.walletAddress!])}>
                  <div>LEGENDARY BOX</div>
                  <img src={box5} />
                </ImageTile>
              </Container>
            ) : (
              <div>Your NFTs will be placed here when you login</div>
            )}
          </Canvas>
        </Section>
      </body>
    </html>
  );
};
