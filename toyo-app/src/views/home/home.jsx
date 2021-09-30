import React from "react";

import menu from "../../assets/images/top/menu.png";
import top_bg from "../../assets/images/top/background.png";
import top_logo from "../../assets/images/top/logo.png";
import top_btn from "../../assets/images/top/btn.png";
import top_lucido from "../../assets/images/top/lucido.png";
import top_ninja from "../../assets/images/top/ninja.png";
import drop_title from "../../assets/images/drop/drop-title.png";
import drop_samurai from "../../assets/images/drop/samurai.png";
import drop_samurai_bg from "../../assets/images/drop/samurai-bg.png";
import drop_bg from "../../assets/images/drop/drop-bg.png";
import wat_bg from "../../assets/images/what/wat-bg.png";
import wat_toyo from "../../assets/images/what/toyo.png";
import discord_btn from "../../assets/images/what/discord-btn.png";
import wat_title from "../../assets/images/what/wat-title.png";
import wat_video from "../../assets/images/what/wat-video.png";
import wat_player from "../../assets/images/what/wat-player.png";

import { Body } from "./style";

export function Home() {
  return (
    <Body>
      <div id="menu">
        <img src={menu} alt="" />
      </div>
      <div id="top--section">
        <div id="top--bg">
          <img src={top_bg} alt="" />
        </div>
        <div className="row">
          <div className="flex">
            <div id="top--lucido">
              <img src={top_lucido} alt="" />
            </div>
          </div>
          <div id="top--col">
            <div className="flex">
              <div id="top--logo">
                <img src={top_logo} alt="" />
              </div>
            </div>
            <div className="flex">
              <div id="top--btn">
                <img src={top_btn} alt="" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div id="top--ninja">
              <img src={top_ninja} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="drop--section">
        <div id="drop--bg">
          <img src={drop_bg} alt="" />
        </div>
        <div id="drop--paragraph">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore non
            autem, nulla blanditiis culpa, rem odit expedita laboriosam fuga
            soluta, eaque nisi dolore totam quas. Culpa ipsa cum unde incidunt?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div id="drop--image">
          <div id="drop--samurai">
            <img src={drop_samurai} alt="" />
          </div>
          <div id="drop--toyo--title">
            <img src={drop_title} alt="" />
          </div>
          <div id="drop--counter">2 24 59 59</div>
        </div>
        <div className="flex">
          <div id="drop--samurai--bg">
            <img src={drop_samurai_bg} alt="" />
          </div>
        </div>
      </div>
      <div id="wat--section">
        <div id="wat--title">
          <img src={wat_title} alt="" />
        </div>
        <div id="wat--video">
          <img src={wat_video} alt="" />
        </div>
        <div id="wat--player">
          <img src={wat_player} alt="" />
        </div>
        <div id="wat--toyo">
          <img src={wat_toyo} alt="" />
        </div>
        <div id="wat--wrapper" className="col">
          <div id="wat--desc">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              enim.
            </p>
          </div>
          <div id="wat--paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              beatae. Laboriosam aliquid doloremque eum ipsam repellendus nisi
              modi vero soluta architecto earum quis animi.
              <br />
              <br />
              Ataque delectus, culpa reprehenderit temporibus molestias!
            </p>
          </div>
          <div id="wat--discord--btn">
            <img src={discord_btn} alt="" />
          </div>
        </div>
        <div id="wat--bg">
          <img src={wat_bg} alt="" />
        </div>
      </div>
    </Body>
  );
}
