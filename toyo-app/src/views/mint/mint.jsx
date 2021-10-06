import React, { useState, useLayoutEffect } from "react";

import { Body } from "./style";

import top_bg from "../../assets/images/top/background.png";
import top_logo from "../../assets/images/top/logo.png";
import top_title from "../../assets/images/drop/drop-title.png";
import drop_bg from "../../assets/images/drop/drop-bg.png";

export function Mint() {
  const DropSection = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width < height) {
      return (
        <>
          <div className="drop--token canvas flex">
            <div className="row">
              <div className="drop--title">FORTIFIED BOX</div>
              <div className="drop--supply">600 left</div>
            </div>
            <div className="drop--unity">{/* Implementar módulo Unity */}</div>
            <div className="drop--info">
              <p>A Genesis Toyo is kept inside this Seed Box.</p>
              <p>People say that it guards an even rarer Toyo.</p>
              <p>You will get:</p>
              <p>1 Genesis Toyo (rare garantee)</p>
              <p>1 Magic Seed Box</p>
            </div>
            <div className="row">
              <div className="drop--price">
                {/* Implementar conversor */}
                <h3>U$ 500.00</h3>
              </div>
              <div className="drop--price--matic">
                <div className="drop--price--matic--img">
                  <img src="" alt="" />
                </div>
                <h3>450.00</h3>
              </div>
            </div>
            <div className="drop--mint--btn">
              MINT NOW
              <img src="" alt="" />
            </div>
            <div className="drop--mint--counter">
              {/* Implementar controle de mintagens realizadas */}
              QNT. 01
            </div>
            <table className="drop--rarity">
              <tr>
                <td>100% - Magic seed box</td>
                <td>85% - Rare Edition</td>
                <td>25% - Limited Edition</td>
                <td>7% - Collectors Edition</td>
                <td>3% - Prototype Edition</td>
              </tr>
              <tr>
                <td>(xxxx)</td>
                <td>(xxxx)</td>
                <td>(xxxx)</td>
                <td>(xxxx)</td>
                <td>(xxxx)</td>
              </tr>
            </table>
          </div>
          <div className="drop--token canvas col">
            <div className="row">
              <div className="drop--title">FORTIFIED BOX</div>
              <div className="drop--supply">600 left</div>
            </div>
            <div className="drop--unity">{/* Implementar módulo Unity */}</div>
            <div className="drop--info">
              <p>A Genesis Toyo is kept inside this Seed Box.</p>
              <p>People say that it guards an even rarer Toyo.</p>
              <p>You will get:</p>
              <p>1 Genesis Toyo (rare garantee)</p>
              <p>1 Magic Seed Box</p>
            </div>
            <div className="row">
              <div className="drop--price">
                {/* Implementar conversor */}
                <h3>U$ 500.00</h3>
              </div>
              <div className="drop--price--matic">
                <div className="drop--price--matic--img">
                  <img src="" alt="" />
                </div>
                <h3>450.00</h3>
              </div>
            </div>
            <div className="drop--mint--btn">
              <img src="" alt="" />
            </div>
            <div className="drop--mint--counter">
              {/* Implementar controle de mintagens realizadas */}
              QNT. 01
            </div>
            <table className="drop--rarity">
              <tr>
                <td>100% - Magic seed box</td>
                <td>85% - Rare Edition</td>
                <td>25% - Limited Edition</td>
                <td>7% - Collectors Edition</td>
                <td>3% - Prototype Edition</td>
              </tr>
              <tr>
                <td>(xxxx)</td>
                <td>(xxxx)</td>
                <td>(xxxx)</td>
                <td>(xxxx)</td>
                <td>(xxxx)</td>
              </tr>
            </table>
          </div>
        </>
      );
    }

    if (width > height) {
      return (
        <>
          <div className="drop--token canvas flex">
            <div className="col">
              <div className="drop--unity">
                {/* Implementar módulo Unity */}
              </div>
              <div className="drop--info--one">
                <p>A Genesis Toyo is kept inside this Seed Box.</p>
                <p>People say that it guards an even rarer Toyo.</p>
              </div>
            </div>
            <div id="drop--info" className="col">
              <div className="row">
                <div className="drop--title">FORTIFIED BOX</div>
                <div className="drop--supply">600 left</div>
              </div>
              <div className="drop--info--two col">
                <p>You will get:</p>
                <p>1 Genesis Toyo (rare garantee)</p>
                <p>1 Magic Seed Box</p>
              </div>
              <div className="row">
                <div className="drop--price">
                  {/* Implementar conversor */}
                  <h3>U$ 500.00</h3>
                </div>
                <div className="drop--price--matic">
                  <div className="drop--price--matic--img">
                    <img src="" alt="" />
                  </div>
                  <h3>450.00</h3>
                </div>
              </div>
              <div className="drop--mint--btn">
                MINT NOW
                <img src="" alt="" />
              </div>
              <div className="drop--mint--counter">
                {/* Implementar controle de mintagens realizadas */}
                QNT. 01
              </div>
              <table className="drop--rarity">
                <tr>
                  <td>100% - Magic seed box</td>
                  <td>85% - Rare Edition</td>
                  <td>25% - Limited Edition</td>
                  <td>7% - Collectors Edition</td>
                  <td>3% - Prototype Edition</td>
                </tr>
                <tr className="drop--rarity--right">
                  <td>(xxxx)</td>
                  <td>(xxxx)</td>
                  <td>(xxxx)</td>
                  <td>(xxxx)</td>
                  <td>(xxxx)</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="drop--token canvas flex">
            <div className="col">
              <div className="drop--unity">
                {/* Implementar módulo Unity */}
              </div>
              <div className="drop--info--one">
                <p>A Genesis Toyo is kept inside this Seed Box.</p>
                <p>People say that it guards an even rarer Toyo.</p>
              </div>
            </div>
            <div id="drop--info" className="col">
              <div className="row">
                <div className="drop--title">FORTIFIED BOX</div>
                <div className="drop--supply">600 left</div>
              </div>
              <div className="drop--info--two col">
                <p>You will get:</p>
                <p>1 Genesis Toyo (rare garantee)</p>
                <p>1 Magic Seed Box</p>
              </div>
              <div className="row">
                <div className="drop--price">
                  {/* Implementar conversor */}
                  <h3>U$ 500.00</h3>
                </div>
                <div className="drop--price--matic">
                  <div className="drop--price--matic--img">
                    <img src="" alt="" />
                  </div>
                  <h3>450.00</h3>
                </div>
              </div>
              <div className="drop--mint--btn">
                MINT NOW
                <img src="" alt="" />
              </div>
              <div className="drop--mint--counter">
                {/* Implementar controle de mintagens realizadas */}
                QNT. 01
              </div>
              <table className="drop--rarity">
                <tr>
                  <td>100% - Magic seed box</td>
                  <td>85% - Rare Edition</td>
                  <td>25% - Limited Edition</td>
                  <td>7% - Collectors Edition</td>
                  <td>3% - Prototype Edition</td>
                </tr>
                <tr className="drop--rarity--right">
                  <td>(xxxx)</td>
                  <td>(xxxx)</td>
                  <td>(xxxx)</td>
                  <td>(xxxx)</td>
                  <td>(xxxx)</td>
                </tr>
              </table>
            </div>
          </div>
        </>
      );
    }
  };

  const FighterSection = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width < height) {
      return (
        <>
          <div className="fight--toyo--concepts">
            <div className="fight--toyo--concept">
              <div className="fight--toyo--concept--image">
                <img src="" alt="" />
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
                <img src="" alt="" />
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
                top metamask
                <img src="" alt="" />
              </div>
              <div id="top--recaptcha--btn">{/* Implementar recapatcha */}</div>
            </div>
          </div>
        </div>
        <div id="drop--wrapper">
          <div id="drop--bg">
            <img src={drop_bg} alt="" />
          </div>
          <DropSection />
        </div>
        <div id="story--wrapper">
          <div className="canvas--right col">
            <div id="story--title">
              KYTUNT
              <img src="" alt="" />
            </div>
            <div id="story--landscape">
              LANDSCAPE
              <img src="" alt="" />
            </div>
            <div id="story--slots">
              <div className="story--slots--block"></div>
              <div className="story--slots--block"></div>
              <div className="story--slots--block"></div>
            </div>
            <div id="story--toyo--img">
              <img src="" alt="" />
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
            FIGHT BG
            <img src="" alt="" />
          </div>
          <div className="canvas col">
            <div id="fight--title">
              <h2>About</h2>
              <img src="" alt="" />
            </div>
            <div className="row" id="fight--toyos">
              <div id="fight--toyos--image">
                A
                <img src="" alt="" />
              </div>
              <div id="fight--toyos--image">
                B
                <img src="" alt="" />
              </div>
              <div id="fight--toyos--image">
                C
                <img src="" alt="" />
              </div>
              <div id="fight--toyos--image">
                D
                <img src="" alt="" />
              </div>
              <div id="fight--toyos--image">
                E
                <img src="" alt="" />
              </div>
              <div id="fight--toyos--image">
                F
                <img src="" alt="" />
              </div>
              <div id="fight--toyos--image">
                G
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <FighterSection />
        </div>
      </div>
    </Body>
  );
}
