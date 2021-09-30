import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  height: auto;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #fff;

  #top {
    margin-bottom: 2rem;
    width: 100%;
    height: 100vh;
    overflow: visible;
    /* background: yellow; */

    @media screen and (orientation: landscape) and (min-width: 1441px) {
      #bg_top {
        display: inline-block;
        position: absolute;
        width: 100%;
        height: auto;
        overflow: visible;
        z-index: 100;
        overflow: hidden;

        img {
          width: 100%;
          height: 150%;
        }
      }
    }

    @media screen and (orientation: landscape) and (max-width: 1366px) {
      #bg_top {
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: visible;
        z-index: 100;
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    @media screen and (orientation: portrait) and (max-width: 520px) {
      #bg_top {
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 400%;
        overflow: visible;
        z-index: 100;
        overflow: hidden;

        img {
          position: relative;
          left: -125%;
          width: 400%;
          height: 200vh;
        }
      }
    }
  }

  @media screen and (min-width: 1441px) {
    #wat {
      position: relative;
      margin-top: -12rem;
      margin-bottom: 4rem;
      height: 86vh;
      overflow: visible;
      background: yellow;
    }
  }

  @media screen and (min-width: 1366px) {
    #wat {
      position: relative;
      margin-top: -8rem;
      margin-bottom: 4rem;
      height: 86vh;
      overflow: visible;
      /* background: yellow; */
    }
  }

  @media screen and (orientation: portrait) and (max-width: 520px) {
    #wat {
      margin-top: 12rem;
    }
  }

  @media screen and (min-width: 1441px) {
    #wat-canvas {
      display: flex;
      position: relative;
      align-self: center;
      left: -2rem;
      /* background: yellow; */
    }
  }

  @media screen and (max-width: 1366px) {
    #wat-canvas {
      display: flex;
      position: relative;
      align-self: center;
      left: -2rem;
      /* background: yellow; */
    }
  }

  @media screen and (max-width: 520px) {
    #wat-canvas {
      left: -1rem;
    }
  }

  @media screen and (orientation: landscape) and (min-width: 1441px) {
    #p2e {
      margin-top: 20rem;
      height: 100vh;
    }
  }

  @media screen and (orientation: landscape) and (max-width: 1366px) {
    #p2e {
      margin-top: 26rem;
      height: 125vh;
      overflow: visible;
      /* background: yellow; */
    }
  }

  @media screen and (max-width: 520px) {
    #p2e {
      margin-top: 20rem;
      margin-bottom: 10rem;
      height: 270vh;
      overflow: visible;
      /* background: yellow; */
    }
  }

  #pvp {
    position: relative;
    margin-top: -12rem;
    width: 100%;
    height: 130vh;
    overflow: visible;
  }

  @media screen and (max-width: 520px) {
    #pvp {
      left: -4rem;
      height: 200vh;
    }
  }

  #collect {
    position: relative;
    flex-direction: column;
    margin-top: 4rem;
    width: 100%;
    height: auto;
    overflow: visible;
    /* background: yellow; */
  }

  @media screen and (max-width: 520px) {
    #collect {
      top: -20rem;
      left: 0;
      margin-bottom: -28rem;
    }
  }

  #customize {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 6rem;
    margin-bottom: 8rem;
    width: 100%;
    height: 90vh;
    /* background: yellow; */
  }

  @media screen and (max-wdith: 520px) {
    #customize {
      margin-bottom: 0;
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-shrink: 1;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  max-width: 100%;
  overflow: visible;
  overflow-x: hidden;
  background-color: #fff;

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (orientation: portrait) {
    flex-direction: column;
    overflow: hidden;
  }

  z-index: 200;

  #canvas-top {
    z-index: 1000;
  }

  #toyo {
    width: 100%;
    height: 100%;
  }

  #canvas-wat {
    display: flex;
    align-self: center;
  }

  @media screen and (orientation: landscape) and (min-width: 1441) {
    #p2e-bg {
      display: block;
      position: absolute;
      align-self: flex-start;
      margin-top: -6rem;
      width: 100%;
      height: 105%;
      /* background-color: hsla(28, 100%, 26%, 1); */
      overflow: visible;
      z-index: 100;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (orientation: landscape) and (max-width: 1366px) {
    #p2e-bg {
      display: block;
      position: absolute;
      align-self: flex-start;
      margin-top: -12rem;
      width: 100%;
      height: 105%;
      /* background-color: hsla(28, 100%, 26%, 1); */
      overflow: visible;
      z-index: 100;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media screen and (orientation: portrait) and (max-width: 520px) {
    #p2e-bg {
      transform: rotate(0deg);
      left: -50%;

      img {
        width: 500%;
        height: 285vh;
      }
    }
  }

  #pvp-bg {
    display: block;
    position: absolute;
    align-self: flex-start;
    margin-top: -4rem;
    width: 100%;
    height: 130vh;

    /* background-color: hsla(360, 100%, 52%, 0.7); */
    overflow: visible;
    z-index: 100;

    img {
      position: relative;
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 520px) {
    #pvp-bg {
      img {
        top: -13.5rem;
        left: -20rem;
        width: 400%;
        height: 195%;
      }
    }
  }

  #canvas-collect {
    display: flex;
    flex-direction: column;
    width: 75%;
    /* background: yellow; */
  }

  @media screen and (max-width: 520px) {
    #canvas-collect {
      margin-left: 2rem;
    }
  }

  #canvas-customize {
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100%;
    /* background: yellow; */
  }
`;

const Menu = styled.div`
  display: block;
  position: fixed;
  top: 4rem;
  right: 16rem;
  width: 3.5rem;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }

  cursor: pointer;
  z-index: 1000;

  @media screen and (max-width: 520px) {
    right: 2rem;
  }
`;

const HomeCanvas = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  margin: 0 10rem;
  /* background-color: hsla(37, 82%, 50%, 1); */
  overflow: visible;
  z-index: 1000;

  @media screen and (max-width: 520px) {
    margin: 0;
  }

  #top-wrapper {
    width: 100%;
    /* background: yellow; */
    z-index: 1000;
  }

  #wat-wrapper {
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 50%;
    height: 100%;
  }

  @media screen and (max-width: 520px) {
    #wat-wrapper {
      width: 75%;
    }
  }

  #pvp-wrapper {
    padding: 2rem;
    width: 100%;
    height: 100%;
    /* background-color: hsla(270, 100%, 52%, 1); */
  }

  @media screen and (max-width: 520px) {
    #pvp-wrapper {
      flex-direction: column;
    }
  }

  #collect-title {
    display: flex;
    margin-top: 4rem;
    width: 100%;
    height: auto;
    /* background-color: hsla(270, 100%, 60%, 1); */

    img {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 520px) {
    #collect-title {
      width: 100%;
      margin-left: 1.5rem;
    }
  }

  #collect-wrapper {
    position: relative;
    width: 100%;
    height: 70%;
    top: -4.5rem;
    /* background-color: hsla(270, 100%, 70%, 1); */

    #collect-text {
      display: flex;
      position: relative;
      align-self: flex-end;
      margin-right: auto;
      margin-left: 0rem;
      width: 19rem;
      color: #000;
      font-size: 0.8rem;
      text-align: justify;
      line-height: 1.1rem;
      /* background-color: hsla(270, 100%, 70%, 1); */
    }

    @media screen and (max-width: 520px) {
      #collect-text {
        width: 100%;
        margin-top: 6rem;
        margin-left: 1.25rem;
        font-size: 1rem;
        text-align: justify;
      }
    }

    #collect-img {
      display: flex;
      position: relative;
      align-self: flex-end;
      margin-left: auto;
      margin-right: 0;
      width: 70%;
      height: 100%;
      max-width: 75%;

      /* background-color: hsla(37, 82%, 50%, 1); */

      img {
        position: relative;
        width: 100%;
        height: auto;
      }
    }

    @media screen and (max-width: 520px) {
      #collect-img {
        margin: 0;

        img {
          top: 2rem;
          right: 5rem;
          width: 150%;
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    #collect-wrapper {
      flex-direction: column;
    }
  }

  #customize-title {
    display: flex;
    position: relative;
    width: 100%;
    height: auto;
    /* background-color: hsla(270, 100%, 60%, 1); */

    img {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 520px) {
    #customize-title {
      left: 15%;
    }
  }

  #customize-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    /* background-color: hsla(270, 100%, 70%, 1); */

    #customs {
      display: block;
      position: relative;
      top: -3.5rem;
      left: 0.5rem;

      img {
        width: 125%;
        height: auto;
      }
    }

    #equal {
      display: block;
      position: relative;
      top: -9rem;
      left: 3.5rem;
      margin-top: auto;
      margin-bottom: 0;
      width: 10rem;
      height: auto;

      img {
        width: 140%;
        height: auto;
      }
    }

    #toyo-result {
      display: flex;
      position: relative;
      width: 75rem;
      height: auto;
      top: -4.5rem;
      left: 0.5rem;
      /* background: yellow; */

      img {
        width: 150%;
        height: auto;
      }
    }

    #customize-text {
      display: flex;
      position: relative;
      top: -4rem;
      margin-top: auto;
      margin-right: 0;
      margin-left: auto;
      margin-bottom: 0;
      width: 56rem;
      text-align: justify;
      font-size: 0.8rem;
      line-height: 1.25rem;
    }
  }

  @media screen and (max-width: 520px) {
    #customize-wrapper {
      display: flex;
      flex-direction: column;

      #customs {
        position: relative;

        img {
          position: relative;
          top: 5rem;
          left: 2rem;
          width: 50%;
        }
      }

      #equal {
        img {
          position: relative;
          top: 4rem;
          left: 9.5rem;
          width: 3rem;
        }
      }

      #toyo-result {
        img {
          position: relative;
          top: -8rem;
          left: 16rem;
          width: 65%;
        }
      }

      #customize-text {
        display: flex;
        margin-top: -6rem;
        margin-left: 3rem;
        width: 100%;
      }
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};

  @media screen and (min-width: 1367px) {
    #logo {
      display: flex;
      flex-direction: column;
      margin-top: 2.5rem;
      margin-left: -2rem;
      width: 20rem;
      height: 15rem;
      min-width: 20rem;
      max-width: 30rem;
      min-height: 15rem;
      max-height: 25rem;
      z-index: 500;
      /* background: yellow; */
    }
  }

  // aiming at 1920 x 1080
  @media screen and (min-width: 1441px) {
    #logo {
      display: block;
      flex-direction: column;
      position: relative;
      top: -2rem;
      left: -5rem;
      width: 21rem;
      height: auto;
      z-index: 1000;

      img {
        width: 135%;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 1366px) {
    #logo {
      display: flex;
      flex-direction: column;
      margin-top: 0.5rem;
      margin-left: -5rem;
      width: 12rem;
      height: 8rem;
      min-width: 10rem;
      max-width: 12rem;
      min-height: 6rem;
      max-height: 8rem;
      z-index: 500;
    }
  }

  @media screen and (max-width: 520px) {
    #logo {
      margin-top: 2rem;
      margin-left: -7rem;
    }
  }

  @media screen and (max-width: 1366px) {
    #logo-base {
      display: block;
      flex-direction: column;
      position: relative;
      margin-top: 0rem;
      margin-right: 9rem;
      width: 19rem;
      height: auto;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media screen and (min-width: 1441px) {
    #logo-title {
      display: flex;
      position: relative;
      top: -19rem;
      left: 7.5rem;
      width: auto;
      min-width: 8rem;
      max-width: 12rem;
      height: auto;
      z-index: 1200;
      transform: rotate(-2.5deg);
      /* background: yellow; */

      img {
        width: 125%;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 1366px) {
    #logo-title {
      display: flex;
      position: relative;
      top: -13.25rem;
      left: 5.5rem;
      width: 8rem;
      height: auto;
      z-index: 600;
      transform: rotate(-2.5deg);

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media screen and (min-width: 1441px) {
    #btn-video {
      display: block;
      position: relative;
      margin-top: -6rem;
      margin-left: 1rem;
      width: 12rem;
      min-width: 10rem;
      max-width: 14rem;
      height: auto;
      z-index: 500;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 1366px) {
    #btn-video {
      display: block;
      position: relative;
      left: -2.5rem;
      margin-top: 7rem;
      margin-left: 4rem;
      margin-right: 4rem;
      width: 6.5rem;
      min-width: 6.5rem;
      max-width: 10rem;
      height: auto;
      z-index: 500;
      /* background: yellow; */

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 520px) {
    #btn-video {
      margin-top: 12rem;
      margin-left: -0.5rem;
      width: 7.25rem;
    }
  }

  #wat-title {
    display: block;
    position: relative;
    margin: 0 auto;
    padding: 1rem;
    width: 80%;
    height: 8rem;
    max-height: 8rem;

    img {
      width: 100%;
      height: auto;
      /* background-color: hsla(37, 82%, 50%, 0.8); */
    }
  }

  @media screen and (max-width: 520px) {
    #wat-title {
      margin-top: -4rem;
      margin-left: -3rem;
      width: 100%;

      img {
        width: 150%;
      }
    }
  }

  #wat-text {
    display: block;
    position: relative;
    margin-top: 2rem;
    text-align: justify;
    font-size: 0.8rem;
    line-height: 1.25rem;
    z-index: 800;
  }

  #btn-discord {
    display: block;
    position: relative;
    align-self: center;
    justify-self: center;
    margin-top: 2rem;
    width: 16rem;
    height: 4.5rem;
    /* background-color: hsla(309, 100%, 25%, 0.5); */
    z-index: 500;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (min-width: 1441px) {
    #p2e-top {
      display: flex;
      position: relative;
      align-self: center;
      margin-top: -7rem;
      margin-left: 3rem;
      min-width: 55%;
      max-width: 75%;
      height: 30rem;
      padding: 1rem;
      /* background-color: hsla(309, 100%, 25%, 0.8); */
    }
  }

  @media screen and (max-width: 1366px) {
    #p2e-top {
      display: flex;
      position: relative;
      align-self: center;
      margin-top: -14rem;
      margin-left: 3rem;
      min-width: 55%;
      max-width: 75%;
      height: 30rem;
      padding: 1rem;
      /* background-color: hsla(309, 100%, 25%, 0.8); */
    }
  }

  #title-p2e-bg {
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: -7rem;
    margin-left: -1.5rem;
    width: 115%;
    height: 86%;
    /* background-color: hsla(309, 100%, 40%, 0.7); */
    overflow: visible;
    z-index: 400;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 520px) {
    #title-p2e-bg {
      margin-left: -7rem;
      width: 200%;

      #separator {
        margin-top: -2rem;
      }
    }
  }

  #title-p2e {
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 1rem;
    margin-left: 1.5rem;
    width: 80%;
    height: auto;
    /* background-color: hsla(309, 100%, 70%, 0.7); */
    overflow: visible;
    z-index: 400;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 520px) {
    #title-p2e {
      margin-top: 4rem;
    }
  }

  #p2e-text-blocks {
    align-self: center;
    justify-content: space-around;
    margin-top: -15rem;
    margin-left: -2rem;
    padding-top: 2rem;
    padding-left: 6rem;
    padding-right: 6rem;
    width: 65%;
    height: 18rem;
    /* background-color: hsla(309, 100%, 25%, 0.5); */
  }

  #text-block-1 {
    left: -1.5rem;
  }

  #text-block-2 {
    right: -1.5rem;
  }

  #text-block-1,
  #text-block-2 {
    display: block;
    position: relative;
    align-self: flex-start;
    width: 50%;
    color: #fff;
    font-size: 0.8rem;
    line-height: 1.24rem;
    text-align: justify;
  }

  @media screen and (max-width: 520px) {
    #p2e-text-blocks {
      margin: 0;
      margin-top: -10rem;
      padding: 0;
      padding: 4rem;
      width: 95%;
      flex-direction: column;
    }

    #text-block-1,
    #text-block-2 {
      left: 0;
      right: 0;
      font-size: 1rem;
      width: 100%;
    }

    #text-block-2 {
      margin-top: 2rem;
    }
  }

  #p2e-neon-cards {
    position: relative;
    align-self: center;
    justify-content: space-around;
    margin-top: -2rem;
    padding: 1rem;
    max-width: 75%;
    max-height: 22rem;
    /* background-color: hsla(309, 100%, 25%, 0.5); */
  }

  @media screen and (max-width: 520px) {
    #p2e-neon-cards {
      flex-direction: column;
      top: 6rem;
      left: 1.5rem;
      margin: 0;
      padding: 0;
      width: 100%;
      height: auto;
      max-height: 100rem;
      /* background-color: yellow; */
    }
  }

  #pvp-title {
    display: block;
    position: relative;
    margin-top: 16rem;
    margin-left: 0rem;
    width: 65%;
    height: auto;
    max-width: 75%;
    /* background-color: hsla(63, 100%, 52%, 1); */

    img {
      display: block;
      position: relative;
      align-self: baseline;
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 520px) {
    #pvp-title {
      width: 100%;

      img {
        top: 2rem;
        left: 4.5rem;
        width: 125%;
        height: auto;
      }
    }
  }

  #pvp-blur {
    display: block;
    position: relative;
    margin-top: -18rem;
    margin-left: -12rem;
    width: 80%;
    height: auto;
    max-width: 80%;
    /* background-color: hsla(63, 100%, 52%, 1); */
    z-index: 200;

    img {
      display: block;
      position: relative;
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 520px) {
    #pvp-blur {
      margin: 0;
      margin-top: -6rem;
      margin-left: 4rem;
      width: 100%;

      img {
        top: -8rem;
        right: 16rem;
        width: 200%;
      }
    }
  }

  #pvp-text {
    display: block;
    position: relative;
    margin-top: -26rem;
    width: auto;
    min-width: 24rem;
    max-width: 28rem;
    color: #fff;
    font-size: 0.8rem;
    line-height: 1.1rem;
    z-index: 800;
  }

  @media screen and (max-width: 520px) {
    #pvp-text {
      margin-top: -38rem;
      margin-left: 4.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  justify-content: center;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};

  #toyo-1 {
    display: block;
    position: relative;
    margin-top: 4rem;
    margin-left: -0.5rem;
    padding-left: 2rem;
    max-width: 45%;
    max-height: 60%;
    height: auto;
    transform: rotate(10deg);

    /* background-color: hsla(309, 100%, 25%, 0.5); */
    overflow: visible;
    z-index: 400;

    img {
      position: relative;
      left: -2rem;
      padding-left: 1rem;
      width: 105%;
      height: auto;
    }

    @media screen and (max-width: 520px) {
      top: 16.5rem;
      left: -10rem;
      transform: rotate(20deg);

      img {
        width: 310%;
      }
    }
  }

  #toyo-2 {
    display: block;
    position: relative;
    right: 4rem;
    margin-top: 11.5rem;
    padding-right: 1rem;
    max-width: 75%;
    max-height: 60%;
    transform: rotate(10deg);
    z-index: 400;
    /* background-color: hsla(309, 100%, 25%, 0.5); */

    img {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 520px) {
      top: -1.5rem;
      right: 8rem;
      transform: rotate(20deg);

      img {
        width: 315%;
      }
    }
  }

  #hulk {
    display: block;
    position: relative;
    align-self: flex-end;
    margin-top: -2rem;
    margin-right: 6rem;
    width: 25%;
    height: auto;
    max-width: 30%;

    /* background-color: hsla(309, 100%, 25%, 0.5); */
    overflow: visible;

    img {
      position: relative;
      top: 1rem;
      left: -3rem;
      padding-left: 1rem;
      width: 125%;
      height: auto;
    }

    z-index: 400;
  }

  @media screen and (max-width: 520px) {
    #hulk {
      transform: rotate(-10deg);

      img {
        top: -4rem;
        left: -6rem;
        min-width: 415%;
        opacity: 0.35;
      }

      z-index: 1;
    }
  }

  #warrior {
    display: flex;
    position: relative;
    align-self: flex-start;
    margin-top: 12rem;
    margin-left: 6rem;
    width: 25%;
    max-width: 30%;
    height: auto;
    /* background-color: hsla(309, 100%, 25%, 0.5); */

    img {
      position: relative;
      width: 125%;
      height: auto;
    }
    z-index: 400;
  }

  @media screen and (max-width: 520px) {
    #warrior {
      img {
        left: -8rem;
        min-width: 400%;
        opacity: 0.35;
      }

      z-index: 1;
    }
  }

  .neon-card {
    width: 30%;
    height: 100%;
    /* background-color: hsla(309, 100%, 25%, 0.5); */

    .neon-card-object {
      width: 100%;
      height: auto;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .neon-card-info {
    margin-top: 1rem;
    text-align: center;
    color: #000;

    .neon-card-title {
      font-size: 1.25rem;
    }

    .neon-card-text {
      padding: 0 1rem;
      margin-top: 0.8rem;
      font-size: 0.8rem;
      line-height: 1.1rem;
    }
  }

  @media screen and (orientation: portrait) and (max-width: 520px) {
    .neon-card {
      width: 80%;
    }

    .neon-card-info {
      margin-top: 2rem;
      margin-bottom: 2rem;
      color: #fff;
    }
  }

  #pvp-video {
    display: block;
    position: relative;
    margin-top: 15rem;
    right: 10rem;
    width: 45%;
    height: auto;
    /* background-color: hsla(63, 100%, 52%, 1); */
    z-index: 800;

    img {
      width: 175%;
      height: auto;
    }
  }

  @media screen and (max-width: 520px) {
    #pvp-video {
      margin: 0;
      top: -34.5rem;
      left: 4rem;

      img {
        width: 225%;
      }
    }
  }
`;

export { Body, Section, HomeCanvas, Column, Row, Menu };
