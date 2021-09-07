import { useCallback, useEffect, useState } from "preact/hooks";

import box1 from "../../assets/images/box1.png";
import box2 from "../../assets/images/box2.png";

import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import ReactSession from "react-client-session";

import {
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
import { connectMetamask } from "../../domain/wallet/services/connectMetamask";
import { manageWallets } from "../../domain/wallet/services/manageWallets";
import { createTemplate } from "../../domain/nft/services/createTemplate";
import { transferNft } from "../../domain/nft/services/transferNft";
import { mintNft } from "../../domain/nft/services/mintNft";
import { getNfts } from "../../domain/nft/services/getNfts";

export function SecretPanel(props) {
  const RECAPTCHA_SITE_KEY = "6LdR8EYcAAAAAPFLQkrMGHrJGCcwGIRNzXUi00gp";
  let [width, height] = useWindowSize();
  let [player, setPlayer] = useState({});
  let [logged, isLogged] = useState(false);
  let [verified, isVerified] = useState(true);
  let [nfts, setNfts] = useState([]);

  const onChange = (value) => {
    console.log("Captcha value:", value);
    isVerified(false);
  };

  const handleInit = async () => {
    console.log(`👷 Welcome to Toyo's official webpage!`);

    if (props.arkaneConnect !== undefined) {
      console.log(`👷 Device online and ready to go!`);
    }

    console.log(`👷 isLogged: `, logged);
    console.log(`👷 actual player: `, player);
  };

  const handleAuthPlayer = async () => {
    if (logged === true && player) {
      await manageWallets(props.arkaneConnect);
      const wallets = await getWallets(props.arkaneConnect);
      setPlayer({ ...player, wallets: wallets });
      return;
    }

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
        // const address = _wallets[0].address;
        // ReactSessions.set("player", targetPlayer);
        console.log(`👷 your info: `, targetPlayer);
        await manageWallets(props.arkaneConnect);
        const wallets = await getWallets(props.arkaneConnect);
        setPlayer({ ...targetPlayer, wallets: wallets });
      } else {
        console.log("👷 Don't worry, we'll set you up on the action 😉!");
        await manageWallets(props.arkaneConnect);

        let i = 0;
        let walletIds = [];
        const wallets = await getWallets(props.arkaneConnect);

        for (i = 0; i < wallets.length; ++i) {
          walletIds.push(`${wallets[i].id}`);
        }

        const newPlayer = {
          playerId: playerId,
          firstName: firstName,
          lastName: lastName,
          email: email,
          wallets: wallets,
        };
        // console.log(newPlayer);
        await setPlayer(newPlayer);

        // ReactSession.set("player", newPlayer);
        newPlayer.wallets = walletIds;
        await savePlayer(newPlayer);
      }
    }
  };

  const authPlayer = async (arkaneConnect) => {
    return await arkaneConnect.flows
      .authenticate({ windowMode: "POPUP" })
      .then((result) => {
        result.authenticated((auth) => {
          console.log(`👷 User authenticated: ${auth.authenticated}`);
          isLogged(auth.authenticated);
          handleAuthPlayer();
        });

        result.notAuthenticated((auth) => {
          console.log("👷 User couldn't be authenticated");
        });
      });
  };

  /* const handleNfts = async () => {
    let i = 0;
    let nftArray = [];
    // const arrLength = player.wallets.length;
    const wallets = await getWallets(props.arkaneConnect);
    for (i; i < wallets.length; ++i) {
      const _nfts = await getNfts(props.arkaneConnect, wallets[i].address);
      nftArray.push(_nfts);
    }
    // console.log(nftArray);
    await setNfts(nftArray);
  }; */

  const ContractForm = () => {
    const initialValues = {
      name: "",
      description: "",
      chain: "",
      symbol: "",
      image: "",
      externalUrl: "",
      media: [],
    };

    return (
      <div class="form-contract">
        <h1>CREATE CONTRACT</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            const contract = {
              name: values.name,
              description: values.description,
              chain: values.chain,
              symbol: values.symbol,
              image: values.image,
              externalUrl: values.externalUrl,
              media: values.media,
            };

            console.log(JSON.stringify(contract));

            try {
              await createContract(contract);
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
                <label htmlFor="chain">CHAIN ("MATIC")</label>
                <Field id="chain" name="chain" placeholder="chain" />
              </Tile>
              <Tile class="tile">
                <label htmlFor="symbol">SYMBOL</label>
                <Field id="symbol" name="symbol" placeholder="symbol" />
              </Tile>
              <Tile class="tile">
                <label htmlFor="image">IMAGE</label>
                <Field id="image" name="image" placeholder="image" />
              </Tile>
              <Tile class="tile">
                <label htmlFor="externalUrl">EXTERNAL URL</label>
                <Field
                  id="externalUrl"
                  name="externalUrl"
                  placeholder="external url"
                />
              </Tile>
              <ConstrainedTile class="tile">
                <label htmlFor="media">MEDIA</label>
                <FieldArray name="media">
                  {({ insert, remove, push }) => (
                    <div id="field-array">
                      {values.media.length > 0 &&
                        values.media.map((media, index) => (
                          <div className="row" key={index}>
                            <div className="col">
                              <label htmlFor={`media.${index}.type`}>
                                Type
                              </label>
                              <Field
                                name={`media.${index}.type`}
                                placeholder="video"
                                type="text"
                              />
                              <ErrorMessage
                                name={`media.${index}.type`}
                                component="div"
                                className="field-error"
                              />
                            </div>
                            <div className="col">
                              <label htmlFor={`media.${index}.value`}>
                                Value
                              </label>
                              <Field
                                name={`media.${index}.value`}
                                placeholder="http://img.arkane.network/chuck_soundtrack.mp3"
                                type="text"
                              />
                              <ErrorMessage
                                name={`media.${index}.value`}
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
                        id="btn-add"
                        type="button"
                        className="secondary"
                        onClick={() => push({ type: "", value: "" })}
                      >
                        Add Media
                      </button>
                    </div>
                  )}
                </FieldArray>
              </ConstrainedTile>
              <button id="btn-submit" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };

  const TemplateForm = () => {
    const initialValues = {
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
      <div class="form-template">
        <h1>CREATE NFT TEMPLATES</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            const template = {
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
            };

            // console.log(JSON.stringify(template));

            try {
              await createTemplate(template);
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
                <FieldArray id="field-array" name="animationUrls">
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
                                onClick={() => remove(index)}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        ))}
                      <button
                        type="button"
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
                <FieldArray id="field-array" name="attributes">
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
              <button id="btn-submit" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };

  const TransferForm = () => {
    const secretType = "MATIC";

    const initialValues = {
      walletId: "",
      to: "",
      tokenAddress: "",
      tokenId: "",
      secretType: "",
      value: "",
    };

    return (
      <div class="form-transfer">
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            const dto = {
              walletId: values.walletId,
              to: values.to,
              tokenAddress: values.tokenAddress,
              tokenId: values.tokenId,
              secretType: "MATIC",
              value: 0.1,
            };

            console.log(dto);

            try {
              await transferNft(props.arkaneConnect, dto);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {({ values }) => (
            <Form>
              <Tile class="tile">
                <label htmlFor="walletId">FROM</label>
                <Field id="walletId" name="walletId" placeholder="from" />
              </Tile>
              <Tile class="tile">
                <label htmlFor="to">TO</label>
                <Field id="to" name="to" placeholder="to" />
              </Tile>
              <Tile class="tile">
                <label htmlFor="tokenAddress">TOKEN ADDRESS</label>
                <Field
                  id="tokenAddress"
                  name="tokenAddress"
                  placeholder="token address"
                />
              </Tile>
              <Tile class="tile">
                <label htmlFor="tokenId">TOKEN ID</label>
                <Field id="tokenId" name="tokenId" placeholder="token Id" />
              </Tile>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={() => onChange()}
              />
              <button id="btn-submit" type="submit" disabled={verified}>
                Submit
              </button>
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
                <div id="btn--login">
                  <NeonButton
                    color={"hsla(273, 100%, 45%, 1)"}
                    onClick={() => authPlayer(props.arkaneConnect)}
                  >
                    CONNECT WITH VENLY
                  </NeonButton>
                  {/* <NeonButton
                    color={"hsla(22, 100%, 43%, 1)"}
                    onClick={() => connectMetamask()}
                  >
                    CONNECT WITH METAMASK
                  </NeonButton> */}
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
                  {logged === true ? (
                    player.wallets.map((wallet, index) => {
                      return (
                        <>
                          <Tile>
                            <label htmlFor="walletName">
                              WALLET #{index} NAME:
                            </label>
                            <div id="walletName">{wallet.alias}</div>
                          </Tile>
                          <Tile>
                            <label htmlFor="walletId">
                              WALLET #{index} ID:
                            </label>
                            <div id="waleltId">{wallet.id}</div>
                          </Tile>
                          <Tile>
                            <label htmlFor="address">
                              WALLET #{index} ADDRESS:
                            </label>
                            <div id="address">{wallet.address}</div>
                          </Tile>
                        </>
                      );
                    })
                  ) : (
                    <Tile>
                      <label htmlFor="wallets">WALLETS:</label>
                    </Tile>
                  )}
                </UserDisplay>
              </Middle>
            </Column>
          </Canvas>
        </Section>
        {/* <Section>
          <Canvas>
            <div>YOUR NFTS:</div>
            <button type="button" onClick={() => handleNfts()}>
              GET NFTS
            </button>
            {nfts.map((nft, index) => {
              console.log(nfts);
              console.log(nft);
              return (
                <>
                  <Tile>
                    <label htmlFor="nftId">NFT ID:</label>
                    <div id="nftId">{nft.id}</div>
                  </Tile>
                  <Tile>
                    <label htmlFor="nftName">NFT NAME:</label>
                    <div id="nftName">{nft.name}</div>
                  </Tile>
                </>
              );
            })}
          </Canvas>
        </Section> */}
        <Section>
          <Canvas>
            <Row>
              <ContractForm />
              <TemplateForm />
            </Row>
          </Canvas>
        </Section>
        <Section>
          <Canvas>
            <Row id="transactions">
              {player ? (
                <Container id="mint-nft">
                  <h1>MINT NFT</h1>
                  <ImageTile onClick={() => mintNft(51, 1)}>
                    <h2>LEGACY BOX</h2>
                    <img src={box1} />
                  </ImageTile>
                  <ImageTile onClick={() => mintNft(1, 1)}>
                    <h2>SUPER RARE BOX</h2>
                    <img src={box2} />
                  </ImageTile>
                </Container>
              ) : (
                <div>Your NFTs will be placed here when you login</div>
              )}
              {player ? (
                <Container id="transfer-nft">
                  <h1>TRANSFER NFT</h1>
                  <ImageTile>
                    <h2>REGULAR BOX</h2>
                    <img src={box1} />
                    <TransferForm />
                  </ImageTile>
                  <ImageTile>
                    <h2>ADVANCED BOX</h2>
                    <img src={box2} />
                    <TransferForm />
                  </ImageTile>
                </Container>
              ) : (
                <div>Your NFTs will be placed here when you login</div>
              )}
            </Row>
          </Canvas>
        </Section>
      </body>
    </html>
  );
}
