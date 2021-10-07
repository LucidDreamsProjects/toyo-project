import React, { useState, useLayoutEffect } from "react";

import { Body } from "./style";

import top_bg from "../../assets/images/home/top/background.png";
import top_logo from "../../assets/images/home/top/logo.png";
import top_title from "../../assets/images/mint/top/top-title.png";
import top_metamask_btn from "../../assets/images/mint/top/top-metamask-btn.png";
import top_add_polygon from "../../assets/images/mint/top/top-add-polygon.png";
import top_add_token from "../../assets/images/mint/top/top-add-token.png";
import drop_bg from "../../assets/images/mint/drop/drop-bg.png";
import drop_matic from "../../assets/images/mint/drop/drop-price-matic-img.png";
import drop_mint_btn_less from "../../assets/images/mint/drop/drop-mint-btn-less.png";
import drop_mint_btn from "../../assets/images/mint/drop/drop-mint-btn.png";
import drop_mint_btn_more from "../../assets/images/mint/drop/drop-mint-btn-more.png";
import story_title from "../../assets/images/mint/story/story-title.png";
import story_landscape from "../../assets/images/mint/story/story-landscape.png";
import story_toyo from "../../assets/images/mint/story/story-toyo.png";
import fight_bg from "../../assets/images/mint/fight/fight-bg.png";
import fight_slot_a from "../../assets/images/mint/fight/fight-slot-a.png";
import fight_slot_b from "../../assets/images/mint/fight/fight-slot-b.png";
import fight_slot_c from "../../assets/images/mint/fight/fight-slot-c.png";
import fight_slot_d from "../../assets/images/mint/fight/fight-slot-d.png";
import fight_slot_e from "../../assets/images/mint/fight/fight-slot-e.png";
import fight_slot_f from "../../assets/images/mint/fight/fight-slot-f.png";
import fight_slot_g from "../../assets/images/mint/fight/fight-slot-g.png";
import fight_title from "../../assets/images/mint/fight/fight-title.png";
import fight_toyo_a from "../../assets/images/mint/fight/fight-toyo-a.png";
import fight_toyo_b from "../../assets/images/mint/fight/fight-toyo-b.png";
import fight_toyo_c from "../../assets/images/mint/fight/fight-toyo-c.png";
import fight_toyo_d from "../../assets/images/mint/fight/fight-toyo-d.png";
import fight_toyo_e from "../../assets/images/mint/fight/fight-toyo-e.png";
import fight_toyo_f from "../../assets/images/mint/fight/fight-toyo-f.png";

export function Mint() {
  const FighterSection = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width < height) {
      return (
        <>
          <div className="fight--toyo--concepts">
            <div className="fight--toyo--concept">
              <div className="fight--toyo--concept--image">
                <img src={fight_toyo_a} alt="" />
              </div>
              <div className="col">
                <div className="fight--toyo--concept--info">
                  <h2>SAMURAI</h2>
                  <h3>PROTOTYPES</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus, debitis ipsa. Fuga ea error nam pariatur incidunt
                    quibusdam, aspernatur molestias saepe quam cumque quisquam
                    dicta suscipit repellat at assumenda cum.
                  </p>
                </div>
              </div>
            </div>
            <div className="fight--toyo--concept">
              <div className="fight--toyo--concept--image">
                <img src="" alt="" />
              </div>
              <div className="col">
                <div className="fight--toyo--concept--info">
                  <h2>SAMURAI</h2>
                  <h3>COLLECTORS</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus, debitis ipsa. Fuga ea error nam pariatur incidunt
                    quibusdam, aspernatur molestias saepe quam cumque quisquam
                    dicta suscipit repellat at assumenda cum.
                  </p>
                </div>
              </div>
            </div>
            <div className="fight--toyo--concept">
              <div className="fight--toyo--concept--image">
                <img src="" alt="" />
              </div>
              <div className="col">
                <div className="fight--toyo--concept--info">
                  <h2>SAMURAI</h2>
                  <h3>LIMITED</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus, debitis ipsa. Fuga ea error nam pariatur incidunt
                    quibusdam, aspernatur molestias saepe quam cumque quisquam
                    dicta suscipit repellat at assumenda cum.
                  </p>
                </div>
              </div>
            </div>
            <div className="fight--toyo--concept">
              <div className="fight--toyo--concept--image">
                <img src="" alt="" />
              </div>
              <div className="col">
                <div className="fight--toyo--concept--info">
                  <h2>SAMURAI</h2>
                  <h3>RARE</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus, debitis ipsa. Fuga ea error nam pariatur incidunt
                    quibusdam, aspernatur molestias saepe quam cumque quisquam
                    dicta suscipit repellat at assumenda cum.
                  </p>
                </div>
              </div>
            </div>
            <div className="fight--toyo--concept">
              <div className="fight--toyo--concept--image">
                <img src="" alt="" />
              </div>
              <div className="col">
                <div className="fight--toyo--concept--info">
                  <h2>SAMURAI</h2>
                  <h3>UNCOMMON</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus, debitis ipsa. Fuga ea error nam pariatur incidunt
                    quibusdam, aspernatur molestias saepe quam cumque quisquam
                    dicta suscipit repellat at assumenda cum.
                  </p>
                </div>
              </div>
            </div>
            <div className="fight--toyo--concept">
              <div className="fight--toyo--concept--image">
                <img src="" alt="" />
              </div>
              <div className="col">
                <div className="fight--toyo--concept--info">
                  <h2>SAMURAI</h2>
                  <h3>COMMON</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus, debitis ipsa. Fuga ea error nam pariatur incidunt
                    quibusdam, aspernatur molestias saepe quam cumque quisquam
                    dicta suscipit repellat at assumenda cum.
                  </p>
                </div>
              </div>
            </div>
            <div className="fight--toyo--concept">
              <div className="fight--toyo--concept--image">
                <img src="" alt="" />
              </div>
              <div className="col">
                <div className="fight--toyo--concept--info">
                  <h2>SAMURAI</h2>
                  <h3>COMMON</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus, debitis ipsa. Fuga ea error nam pariatur incidunt
                    quibusdam, aspernatur molestias saepe quam cumque quisquam
                    dicta suscipit repellat at assumenda cum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    if (width > height) {
      return (
        <>
          <div className="fight--toyo--concepts">
            <div className="fight--toyo--concept">
              <div className="fight--toyo--concept--image">
                <img src={fight_toyo_a} alt="" />
              </div>
              <div className="col">
                <div className="fight--toyo--concept--info">
                  <h2>SAMURAI</h2>
                  <h3 className="orange">PROTOTYPES</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus, debitis ipsa. Fuga ea error nam pariatur incidunt
                    quibusdam, aspernatur molestias saepe quam cumque quisquam
                    dicta suscipit repellat at assumenda cum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <Body>
      <div id="mint--wrapper">
        <div id="top--wrapper">
          <div id="top--bg">
            <img src={top_bg} alt="" />
          </div>
          <div className="canvas col">
            <div id="top--logo">
              <img src={top_logo} alt="" />
            </div>
            <div id="top--title">
              <img src={top_title} alt="" />
            </div>
            <div id="top--btns" className="row">
              <div id="top--metamask--btn">
                <img src={top_metamask_btn} alt="" />
              </div>
              <div id="top--add--polygon">
                <img src={top_add_polygon} alt="" />
              </div>
              <div id="top--add--token">
                <img src={top_add_token} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div id="drop--wrapper">
          <div id="drop--bg">
            <img src={drop_bg} alt="" />
          </div>
          <div className="drop--canvas flex">
            <div className="drop--token">
              <div className="drop--unity">
                {/* Implementar módulo Unity */}
              </div>
              <div className="drop--title">Kytunt Box</div>
              <div className="drop--supply">Minted: 2400 / 2400</div>
              <div className="drop--info">
                <p>Box contains:</p>
                <p>1 Genesis Toyo</p>
                <p>1 Magic Seed Box</p>
              </div>
              <div className="drop--price">
                <div className="drop--price--matic">
                  <div className="drop--price--matic--img">
                    <img src={drop_matic} alt="" />
                  </div>
                  <h3>450</h3>
                </div>
                <div className="drop--price--dollar">
                  {/* Implementar conversor */}
                  <h3>~ U$ 500.00</h3>
                </div>
              </div>
              <div className="drop--mint--btn">
                <div className="drop--mint--btn--less">
                  <img src={drop_mint_btn_less} alt="" />
                </div>
                <div className="drop--mint--btn--center">
                  <img src={drop_mint_btn} alt="" />
                </div>
                <div className="drop--mint--btn--more">
                  <img src={drop_mint_btn_more} alt="" />
                </div>
              </div>
              <table className="drop--rarity">
                <tr>
                  <td>Common Edition</td>
                  <td className="green">Uncommon Edition</td>
                  <td className="blue">Rare Edition</td>
                  <td className="purple">Limited Edition</td>
                  <td className="pink">Collectors Edition</td>
                  <td className="orange">Prototype Edition</td>
                </tr>
                <tr className="drop--rarity--right">
                  <td>52%</td>
                  <td className="green">32%</td>
                  <td className="blue">10%</td>
                  <td className="purple">4%</td>
                  <td className="pink">1.5%</td>
                  <td className="orange">0.5%</td>
                </tr>
              </table>
            </div>
            <div className="drop--token">
              <div className="drop--unity">
                {/* Implementar módulo Unity */}
              </div>
              <div className="drop--title">Fortified Kytunt Box</div>
              <div className="drop--supply">Minted: 600 / 600</div>
              <div className="drop--info">
                <p>Box contains:</p>
                <p>1 Genesis Toyo</p>
                <p>1 Magic Seed Box</p>
              </div>
              <div className="drop--price">
                <div className="drop--price--matic">
                  <div className="drop--price--matic--img">
                    <img src={drop_matic} alt="" />
                  </div>
                  <h3>450</h3>
                </div>
                <div className="drop--price--dollar">
                  {/* Implementar conversor */}
                  <h3>~ U$ 500.00</h3>
                </div>
              </div>
              <div className="drop--mint--btn">
                <div className="drop--mint--btn--less">
                  <img src={drop_mint_btn_less} alt="" />
                </div>
                <div className="drop--mint--btn--center">
                  <img src={drop_mint_btn} alt="" />
                </div>
                <div className="drop--mint--btn--more">
                  <img src={drop_mint_btn_more} alt="" />
                </div>
              </div>
              <table className="drop--rarity">
                <tr>
                  <td>Common Edition</td>
                  <td className="green">Uncommon Edition</td>
                  <td className="blue">Rare Edition</td>
                  <td className="purple">Limited Edition</td>
                  <td className="pink">Collectors Edition</td>
                  <td className="orange">Prototype Edition</td>
                </tr>
                <tr className="drop--rarity--right">
                  <td>52%</td>
                  <td className="green">32%</td>
                  <td className="blue">10%</td>
                  <td className="purple">4%</td>
                  <td className="pink">1.5%</td>
                  <td className="orange">0.5%</td>
                </tr>
              </table>
            </div>
          </div>
          <div id="drop--recaptcha">
            <div>RECAPTCHA</div>
          </div>
        </div>
        <div id="story--wrapper">
          <div className="canvas--right col">
            <div id="story--title">
              <img src={story_title} alt="" />
            </div>
            <div id="story--landscape">
              <img src={story_landscape} alt="" />
            </div>
            <div id="story--slots">
              <div className="story--slots--block"></div>
              <div className="story--slots--block"></div>
              <div className="story--slots--block"></div>
            </div>
            <div id="story--toyo--img">
              <img src={story_toyo} alt="" />
            </div>
            <div id="story--toyo--paragraph">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                ipsa commodi reprehenderit laudantium minus quod magnam cum
                blanditiis nihil illo nostrum minima velit dolor praesentium est
                rerum, qui eius eos.
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                fugit nihil asperiores officia illo voluptate maiores quos,
                deleniti aut fugiat ab quas explicabo blanditiis quisquam, enim
                magni quis. Ipsum, eaque? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Voluptatem veniam beatae cumque
                assumenda ad consequuntur minima tempore, repellat sapiente
                pariatur accusantium quo aspernatur ipsum officia expedita
                aperiam voluptates facere dolorum. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Assumenda excepturi eligendi
                repellat fugiat tenetur suscipit possimus molestias a voluptate
                tempore aperiam rerum, repellendus blanditiis incidunt inventore
                fuga reprehenderit eaque. Ducimus! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Officiis quibusdam delectus
                molestiae architecto placeat reprehenderit laudantium similique
                odit vitae magnam error perferendis explicabo sed quas,
                veritatis fugiat rerum voluptates a.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione, maxime consequuntur! Quos illum quasi error consequatur
                labore deserunt rem sed perspiciatis! Itaque ut consequatur
                commodi accusamus voluptas consectetur voluptatem similique?
              </p>
            </div>
          </div>
        </div>
        <div id="fight--wrapper">
          <div id="fight--bg">
            <img src={fight_bg} alt="" />
          </div>
          <div className="canvas col">
            <div id="fight--title">
              <h2>About</h2>
              <img src={fight_title} alt="" />
            </div>
            <div className="row" id="fight--toyos">
              <div id="fight--toyos--image">
                <img src={fight_slot_a} alt="" />
              </div>
              <div id="fight--toyos--image">
                <img src={fight_slot_b} alt="" />
              </div>
              <div id="fight--toyos--image">
                <img src={fight_slot_c} alt="" />
              </div>
              <div id="fight--toyos--image">
                <img src={fight_slot_d} alt="" />
              </div>
              <div id="fight--toyos--image">
                <img src={fight_slot_e} alt="" />
              </div>
              <div id="fight--toyos--image">
                <img src={fight_slot_f} alt="" />
              </div>
              <div id="fight--toyos--image">
                <img src={fight_slot_g} alt="" />
              </div>
            </div>
          </div>
          <FighterSection />
        </div>
      </div>
    </Body>
  );
}
