import { useState, useEffect } from "react";
import { useWindowSize } from "../../domain/global/hooks/useWindowSize";

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

import menu from "../../assets/images/menu/menu.png";
import bg_top from "../../assets/images/top/bg_top.png";
import toyo1 from "../../assets/images/top/toyo1.png";
import logo_base from "../../assets/images/top/logo-base.png";
import logo from "../../assets/images/top/logo.png";
import btn_watch from "../../assets/images/top/btn-watch.png";
import toyo2 from "../../assets/images/top/toyo2.png";
import hulk from "../../assets/images/what/hulk.png";
import title_what from "../../assets/images/what/title_what.png";
import btn_discord from "../../assets/images/what/btn-discord.png";
import warrior from "../../assets/images/what/warrior.png";
import bg_p2e from "../../assets/images/play2earn/bg_p2e.png";
import separator from "../../assets/images/play2earn/separator.png";
import title_p2e from "../../assets/images/play2earn/title_p2e.png";
import tokens from "../../assets/images/play2earn/tokens.png";
import toyo from "../../assets/images/play2earn/toyo.png";
import parts from "../../assets/images/play2earn/parts.png";
import bg_pvp from "../../assets/images/pvp/bg_pvp.png";
import blur from "../../assets/images/pvp/blur.png";
import title_pvp from "../../assets/images/pvp/title_pvp.png";
import video from "../../assets/images/pvp/video.png";
import title_collect from "../../assets/images/collect/title_collect.png";
import genies from "../../assets/images/collect/genies.png";
import title_customize from "../../assets/images/customize/title_customize.png";
import customs from "../../assets/images/customize/customs.png";
import equal from "../../assets/images/customize/equal.png";
import toyo_result from "../../assets/images/customize/toyo_result.png";

export function Home(props) {
  return (
    <Body>
      <Menu>
        <img src={menu} alt="Toyo menu button" />
      </Menu>
      <Section id="section-1">
        <GraffitiBackground>
          <img src={bg_top} alt="Toyo's header colorful background" />
        </GraffitiBackground>
        <HomeCanvas id="toyo">
          <Row id="top-row">
            <div id="toyo-1">
              <img src={toyo1} alt="" />
            </div>
            <Column width="26%">
              <div id="logo-base">
                <img src={logo_base} alt="" />
              </div>
              <div id="logo">
                <img src={logo} alt="" />
              </div>
              <div id="btn-video">
                <img src={btn_watch} alt="" />
              </div>
            </Column>
            <div id="toyo-2">
              <img src={toyo2} alt="" />
            </div>
          </Row>
        </HomeCanvas>
      </Section>
      <Section id="section-2">
        <HomeCanvas id="wat">
          <Row>
            <div id="toyo-3">
              <img src={hulk} alt="" />
            </div>
            <Column id="wat-wrapper">
              <div id="wat-title">
                <img src={title_what} alt="" />
              </div>
              <div id="wat-text">
                <p>
                  Toyo is an NFT Game with Play2Earn mechanics, inspired by the
                  action
                  <br />
                  figures of our childhood.
                  <br />
                  <br />
                  Many generation grew up playing with those toys, putting them
                  to face
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
                  Who else misses our child's imagination? Toyo intends to bring
                  that
                  <br />
                  nostalgia back.
                  <br />
                  <br />
                  We are really excited to build what would be the Toyo
                  Metaverse. A vast
                  <br />
                  world where you and your Toyos could, together, write your own
                  path for
                  <br />
                  glory.
                </p>
              </div>
              <div id="btn-discord">
                <img src={btn_discord} alt="" />
              </div>
            </Column>
            <div id="toyo-4">
              <img src={warrior} alt="" />
            </div>
          </Row>
        </HomeCanvas>
      </Section>
      <Section id="section-3">
        <div id="p2e-bg">
          <img src={bg_p2e} alt="" />
        </div>
        <HomeCanvas id="p2e">
          <Column>
            <div id="p2e-top">
              <div id="title-p2e-bg">
                <img src={separator} alt="" />
                <div id="title-p2e">
                  <img src={title_p2e} alt="" />
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
              <div className="neon-card">
                <div className="neon-card-object">
                  <img src={tokens} alt="" />
                </div>
                <div className="neon-card-info">
                  <h2 className="neon-card-title">EARN TOKENS</h2>
                  <p className="neon-card-text">
                    Earn Toyo in Tournaments, PVP fights and quest fights.
                  </p>
                </div>
              </div>
              <div className="neon-card">
                <div className="neon-card-object">
                  <img src={toyo} alt="" />
                </div>
                <div className="neon-card-info">
                  <h2 className="neon-card-title">EARN TOYOS</h2>
                  <p className="neon-card-text">
                    Earn Toyos (NFTs) in Tournaments, and high stake fights.
                  </p>
                </div>
              </div>
              <div className="neon-card">
                <div className="neon-card-object">
                  <img src={parts} alt="" />
                </div>
                <div className="neon-card-info">
                  <h2 className="neon-card-title">EARN PARTS</h2>
                  <p className="neon-card-text">
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
          <img src={bg_pvp} alt="" />
        </div>
        <HomeCanvas id="pvp">
          <Row id="pvp-wrapper">
            <Column>
              <div id="pvp-title">
                <img src={title_pvp} alt="" />
              </div>
              <div id="pvp-blur">
                <img src={blur} alt="" />
              </div>
              <div id="pvp-text">
                Test your strategy combined with your "Toyos" abilities and
                <br />
                strength against others players.
              </div>
            </Column>
            <div id="pvp-video">
              <img src={video} alt="" />
              {/* <video width="100%" height="100%" autoPlay>
                  <source src="" type="video/mp4"></source>
                </video> */}
            </div>
          </Row>
        </HomeCanvas>
      </Section>
      <Section id="section-5">
        <HomeCanvas id="collect">
          <div id="collect-title">
            <img src={title_collect} alt="" />
          </div>
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
              <img src={genies} alt="" />
            </div>
          </Row>
        </HomeCanvas>
      </Section>
      <Section id="section-6">
        <HomeCanvas id="customize">
          <div id="customize-title">
            <img src={title_customize} alt="" />
          </div>
          <Row id="customize-wrapper">
            <div>
              <img src={customs} alt="" />
            </div>
            <div>
              <img src={equal} alt="" />
            </div>
            <div>
              <img src={toyo_result} alt="" />
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
  );
}
