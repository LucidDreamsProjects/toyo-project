import { useEffect, useState } from "preact/hooks";
import {
  ArkaneConnect,
  Wallet,
  WindowMode,
} from "@arkane-network/arkane-connect";
import axios from "axios";

import logo from "../../assets/images/luciddreams.jpg";
import box1 from "../../assets/images/box1.jpg";
import box2 from "../../assets/images/box2.jpg";
import box3 from "../../assets/images/box3.jpg";
import box4 from "../../assets/images/box4.jpg";
import box5 from "../../assets/images/box5.jpg";

import { FunctionalComponent } from "preact";
import {
  Section,
  Canvas,
  Top,
  Middle,
  Container,
  Column,
  Row,
  NftForm,
  SimpleForm,
  UserDisplay,
  Tile,
  ConstrainedTile,
  ImageTile,
  NeonButton,
} from "./styles";
import { authPlayer } from "../../services/auth/authPlayer";
import { getProfile } from "../../services/player/getProfile";
import { findPlayerById } from "../../services/player/findPlayerById";
import { Player } from "../../services/player/interfaces/player";
import { savePlayer } from "../../services/player/savePlayer";
import { SavePlayerDto } from "../../services/player/dto/save-player.dto";
import { Nft } from "../../services/nft/interfaces/nft";
import { SaveNftDto } from "../../services/nft/dto/save-nft.dto";
import { KeycloakInstance } from "keycloak-js";
import { AuthenticationResult } from "@arkane-network/arkane-connect/dist/src/connect/connect";
import { createWallet } from "../../services/wallet/createWallet";
import { getWallets } from "../../services/wallet/getWallets";
import { createNft } from "../../services/nft/createNft";
import { SyntheticEvent } from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldArray,
  ErrorMessage,
} from "formik";
import { useWindowSize } from "../../domain/global/hooks/useWindowSize";

interface SecretPanelProps {
  arkaneConnect: ArkaneConnect;
}

interface NftFormikFormValues {
  name: "";
  description: "";
  image: "";
  externalUrls: "";
  backgroundColor: "";
  fungible: false;
  maxSupply: 0;
  burnable: true;
  animationUrls: [];
  attributes: [];
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

  const NftTemplateForm = (): JSX.Element => {
    const initialValues: NftFormikFormValues = {
      name: "",
      description: "",
      image: "",
      externalUrls: "",
      backgroundColor: "",
      fungible: false,
      maxSupply: 0,
      burnable: true,
      animationUrls: [],
      attributes: [],
    };

    return (
      <div>
        <h1>CREATE NFT TEMPLATES</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            const nft = {
              name: values.name,
              description: values.description,
              image: values.image,
              externalUrls: values.externalUrls,
              backgroundColor: values.backgroundColor,
              fungible: values.fungible,
              maxSupply: values.maxSupply,
              burnable: values.burnable,
              animationUrls: values.animationUrls,
              attributes: values.attributes,
            } as SaveNftDto;

            console.log(nft);

            try {
              await createNft(nft);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {({ values }) => (
            <Form>
              <Tile class="tile">
                <label htmlFor="name">NOME</label>
                <Field id="name" name="name" placeholder="name" />
              </Tile>
              <Tile class="tile">
                <label htmlFor="description">DESCRIPTION</label>
                <Field
                  id="description"
                  name="description"
                  placeholder="description"
                />
              </Tile>
              <Tile class="tile">
                <label htmlFor="image">IMAGE</label>
                <Field id="image" name="image" placeholder="image" />
              </Tile>
              <Tile class="tile">
                <label htmlFor="externalUrl">EXTERNAL URL</label>
                <Field
                  id="externalUrl"
                  name="externalUrls"
                  placeholder="external url"
                />
              </Tile>
              <Tile class="tile">
                <label htmlFor="backgroundColor">BACKGROUND COLOR</label>
                <Field
                  id="backgroundColor"
                  name="backgroundColor"
                  placeholder="background color"
                />
              </Tile>
              <Tile class="tile col">
                <label htmlFor="fungible">FUNGIBLE</label>
                <div>YES</div>
                <Field
                  id="fungible"
                  name="fungible"
                  type="radio"
                  value="true"
                />
                <div>NO</div>
                <Field
                  id="fungible"
                  name="fungible"
                  type="radio"
                  value="false"
                />
              </Tile>
              <Tile class="tile">
                <label htmlFor="maxSupply">MAX SUPPLY</label>
                <Field
                  id="maxSupply"
                  name="maxSupply"
                  type="number"
                  placeholder="max supply"
                />
              </Tile>
              <Tile class="tile">
                <label htmlFor="burnable">BURNABLE</label>
                <div>YES</div>
                <Field
                  id="burnable"
                  name="burnable"
                  type="radio"
                  value="true"
                />
                <div>NO</div>
                <Field
                  id="burnable"
                  name="burnable"
                  type="radio"
                  value="false"
                />
              </Tile>
              <ConstrainedTile class="tile">
                <label htmlFor="animationUrls">ANIMATION URL</label>
                <FieldArray name="animationUrls">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.animationUrls.length > 0 &&
                        values.animationUrls.map((animationUrls, index) => (
                          <div className="row" key={index}>
                            <div className="col">
                              <label htmlFor={`animationUrls.${index}.type`}>
                                Type
                              </label>
                              <Field
                                name={`animationUrls.${index}.type`}
                                placeholder="video"
                                type="text"
                              />
                              <ErrorMessage
                                name={`animationUrls.${index}.type`}
                                component="div"
                                className="field-error"
                              />
                            </div>
                            <div className="col">
                              <label htmlFor={`animationUrls.${index}.value`}>
                                Value
                              </label>
                              <Field
                                name={`animationUrls.${index}.value`}
                                placeholder="http://img.arkane.network/chuck_soundtrack.mp3"
                                type="text"
                              />
                              <ErrorMessage
                                name={`animationUrls.${index}.value`}
                                component="div"
                                className="field-error"
                              />
                            </div>
                            <div className="col">
                              <button
                                type="button"
                                className="secondary"
                                onClick={() => remove(index)}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        ))}
                      <button
                        type="button"
                        className="secondary"
                        onClick={() => push({ type: "", value: "" })}
                      >
                        Add Animation Url
                      </button>
                    </div>
                  )}
                </FieldArray>
              </ConstrainedTile>
              <ConstrainedTile class="tile">
                <label htmlFor="attributes">ATTRIBUTES</label>
                <FieldArray name="attributes">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.attributes.length > 0 &&
                        values.attributes.map((attributes, index) => (
                          <div className="row" key={index}>
                            <div className="col">
                              <label htmlFor={`attributes.${index}.type`}>
                                Type
                              </label>
                              <Field
                                name={`attributes.${index}.type`}
                                placeholder="property"
                                type="text"
                              />
                              <ErrorMessage
                                name={`attributes.${index}.type`}
                                component="div"
                                className="field-error"
                              />
                            </div>
                            <div className="col">
                              <label htmlFor={`attributes.${index}.name`}>
                                Name
                              </label>
                              <Field
                                name={`attributes.${index}.name`}
                                placeholder="Generic"
                                type="text"
                              />
                              <ErrorMessage
                                name={`attributes.${index}.name`}
                                component="div"
                                className="field-error"
                              />
                            </div>
                            <div className="col">
                              <label htmlFor={`attributes.${index}.value`}>
                                Value
                              </label>
                              <Field
                                name={`attributes.${index}.value`}
                                placeholder="Token"
                                type="text"
                              />
                              <ErrorMessage
                                name={`attributes.${index}.value`}
                                component="div"
                                className="field-error"
                              />
                            </div>
                            <div className="col">
                              <button
                                type="button"
                                className="secondary"
                                onClick={() => remove(index)}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        ))}
                      <button
                        type="button"
                        className="secondary"
                        onClick={() => push({ type: "", name: "", value: "" })}
                      >
                        Add Attribute
                      </button>
                    </div>
                  )}
                </FieldArray>
              </ConstrainedTile>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
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
