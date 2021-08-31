import { useEffect } from "react";
import { useWindowSize } from "../../domain/global/hooks/useWindowSize";
import { useState } from "preact/hooks";

import {
  Body,
  HomeCanvas,
  GraffitiBackground,
  GraffitiLogo,
  Section,
  Column,
  Row,
  Menu,
} from "./styles";

import toyo1 from "../../assets/images/toyo1.png";
import toyo2 from "../../assets/images/toyo2.png";
// import menu from "../../assets/images/menu.png";

export function Home(props) {
  let [width, height] = useWindowSize();
  let [player, setPlayer] = useState({});
  let [logged, isLogged] = useState(false);

  async function handleInit() {
    console.log(`👷 Welcome to Toyo's official webpage!`);

    if (props.arkaneConnect !== undefined) {
      console.log(`👷 Device online and ready to go!`);
    }

    console.log(`👷 isLogged: `, logged);
    console.log(`👷 actual player: `, player);
  }

  useEffect(() => {
    handleInit();
  }, []);

  return (
    <html>
      <Body>
        <Menu>{/* <img src={menu} alt="Toyo menu button" /> */}</Menu>
        <Section id="section-1">
          <GraffitiBackground>
            GRAFFITI BACKGROUND
            <img src="" alt="" />
          </GraffitiBackground>
          <GraffitiLogo>
            GRAFFITI LOGO
            <img src="" alt="" />
          </GraffitiLogo>
          <HomeCanvas id="toyo">
            <Row id="top-row">
              <div id="toyo-1">
                <img src={toyo1} alt="" />
              </div>
              <Column width="26%">
                <div id="logo">
                  LOGO
                  <img src="" alt="" />
                </div>
                <div id="btn-video">
                  WATCH ME
                  <img src="" alt="" />
                </div>
              </Column>
              <div id="toyo-2">
                <img src={toyo2} alt="" />
              </div>
            </Row>
          </HomeCanvas>
        </Section>
        <Section id="section-2">
          <HomeCanvas id="wit">
            <Row>
              <div id="toyo-3">
                <img src={toyo1} alt="" />
              </div>
              <Column id="wit-wrapper">
                <div id="wit-title">
                  WHAT IS TOYO
                  <img src="" alt="" />
                </div>
                <div id="wit-text">
                  <p>
                    Toyo is an NFT Game with Play2Earn mechanics, inspired by
                    the action
                    <br />
                    figures of our childhood.
                    <br />
                    <br />
                    Many generation grew up playing with those toys, putting
                    them to face
                    <br />
                    each other in insane battles (well, at least in our heads,
                    right?).
                    <br />
                    From the excitement of building heroes to the happiness when
                    enemies
                    <br />
                    were destroyed, we were the writers of our own stories.
                    <br />
                    <br />
                    Who else misses our child's imagination? Toyo intends to
                    bring that
                    <br />
                    nostalgia back.
                    <br />
                    <br />
                    We are really excited to build what would be the Toyo
                    Metaverse. A vast
                    <br />
                    world where you and your Toyos could, together, write your
                    own path for
                    <br />
                    glory.
                  </p>
                </div>
                <div id="btn-discord">
                  BTN DISCORD
                  <img src="" alt="" />
                </div>
              </Column>
              <div id="toyo-4">
                <img src={toyo2} alt="" />
              </div>
            </Row>
          </HomeCanvas>
        </Section>
        <Section id="section-3">
          <div id="p2e-bg">
            <img src="" alt="" />
          </div>
          <HomeCanvas id="p2e">
            <Column>
              <div id="p2e-top">
                <div id="title-p2e-bg">
                  BACKGROUND
                  <img src="" alt="" />
                  <div id="toyo-5">
                    <img src={toyo1} alt="" />
                  </div>
                  <div id="title-p2e">
                    PLAY 2 EARN
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <Row id="p2e-text-blocks">
                <div id="text-block-1">
                  <p>
                    We strongly believe that any
                    <br />
                    person should be awarded for the
                    <br />
                    entire effort they put into games.
                    <br />
                    As we also believe this is the
                    <br />
                    future of gaming.
                  </p>
                </div>
                <div id="text-block-2">
                  <p>
                    While playing Toyo, you will have
                    <br />
                    the ability to earn fungible
                    <br />
                    tokens that can also be used to
                    <br />
                    buy in-game assets, as well as
                    <br />
                    non-fungible tokens (NFTs) which
                    <br />
                    can be characters, replaceable
                    <br />
                    parts, skills, and more.
                    <br />
                    <br />
                    All this in the transparency of
                    <br />
                    blockchain technology.
                  </p>
                </div>
              </Row>
              <Row id="p2e-neon-cards">
                <div class="neon-card">
                  <div class="neon-card-border">
                    <img src="" alt="" />
                    <div class="neon-card-bg">
                      <img src="" alt="" />
                    </div>
                    <div class="neon-card-items">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div class="neon-card-info">
                    <h2 class="neon-card-title">EARN TOKENS</h2>
                    <p class="neon-card-text">
                      Earn Toyo in Tournaments, PVP fights and quest fights.
                    </p>
                  </div>
                </div>
                <div class="neon-card">
                  <div class="neon-card-border">
                    <img src="" alt="" />
                    <div class="neon-card-bg">
                      <img src="" alt="" />
                    </div>
                    <div class="neon-card-items">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div class="neon-card-info">
                    <h2 class="neon-card-title">EARN TOYOS</h2>
                    <p class="neon-card-text">
                      Earn Toyos (NFTs) in Tournaments, and high stake fights.
                    </p>
                  </div>
                </div>
                <div class="neon-card">
                  <div class="neon-card-border">
                    <img src="" alt="" />
                    <div class="neon-card-bg">
                      <img src="" alt="" />
                    </div>
                    <div class="neon-card-items">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div class="neon-card-info">
                    <h2 class="neon-card-title">EARN PARTS</h2>
                    <p class="neon-card-text">
                      Earn parts in Tournaments, and quest fights.
                    </p>
                  </div>
                </div>
              </Row>
            </Column>
          </HomeCanvas>
        </Section>
        <Section id="section-4">
          <div id="pvp-bg">
            <img src="" alt="" />
          </div>
          <HomeCanvas id="pvp">
            <Row id="pvp-wrapper">
              <Column>
                <div id="pvp-title">PVP MODULE</div>
                <div id="pvp-text">
                  Test your strategy combined with your "Toyos" abilities and
                  <br />
                  strength against others players.
                </div>
              </Column>
              <div id="pvp-video">
                VIDEO
                {/* <video width="100%" height="100%" autoPlay>
                  <source src="" type="video/mp4"></source>
                </video> */}
              </div>
            </Row>
          </HomeCanvas>
        </Section>
        <Section id="section-5">
          <HomeCanvas id="collect">
            <div id="collect-title">COLLECT</div>
            <Row id="collect-wrapper">
              <div id="collect-text">
                <p>
                  Expect to have various range of unique
                  <br />
                  styles of Toyos, from warriors to punks,
                  <br />
                  high-techs, athletes, gangstas, badasses,
                  <br />
                  fashionistas, and many more. The ranges
                  <br />
                  will also depend on wich region they come
                  <br />
                  from. Toyos will also be defined by
                  <br />
                  different tiers of Rarity based on their
                  <br />
                  parts.
                  <br />
                  <br />
                  Expect to have various range of unique
                  <br />
                  styles of Toyos, from warriors to punks,
                  <br />
                  high-techs, athletes, gangstas, badasses,
                  <br />
                  fashionistas, and many more. The ranges
                  <br />
                  will also depend on wich region they come
                  <br />
                  from. Toyos will also be defined by.
                </p>
              </div>
              <div id="collect-img">
                IMAGE COLECIONÁVEIS (Toyos)
                <img src="" alt="" />
              </div>
            </Row>
          </HomeCanvas>
        </Section>
        <Section id="section-6">
          <HomeCanvas id="customize">
            <div id="customize-title">
              CUSTOMIZE TITLE
              <img src="" alt="" />
            </div>
            <Row id="customize-wrapper">
              <div id="customize-img">
                CUSTOMIZE IMG
                <img src="" alt="" />
              </div>
              <div id="customize-text">
                <p>
                  Any toyo can be highly customized, with
                  <br />
                  different NFT arms set, NFT hands, NFT leg
                  <br />
                  sets, NFT heads, NFT accessories, and even
                  <br />
                  NFT skills. Our team will work hard to
                  <br />
                  create hundreds of extra parts that can be
                  <br />
                  attached to your Toyo, making it one of a<br />
                  kind.
                  <br />
                  <br />
                  When customizing your Toyo, pay attention
                  <br />
                  to what stats and skills the different
                  <br />
                  parts add to your Toyo.
                </p>
              </div>
            </Row>
          </HomeCanvas>
        </Section>
      </Body>
    </html>
  );
}
