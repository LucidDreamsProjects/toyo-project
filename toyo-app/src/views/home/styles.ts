import styled from "styled-components";

const Body = styled.body`
  #section-1 {
    /* background-color: yellow; */
    margin-bottom: 2rem;
    height: 85vh;
  }

  #section-2 {
    /* background-color: yellow; */
    margin-bottom: 2rem;
    height: 80vh;
  }

  #section-3 {
    /* background-color: yellow; */
    margin-top: 20rem;
  }

  #section-4 {
    /* background-color: yellow; */
    height: 130vh;
    margin-top: -2rem;
  }

  #section-5 {
    margin-bottom: 8rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-shrink: 1;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  max-width: 100%;
  overflow: visible;
  background-color: #fff;

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (orientation: portrait) {
    flex-direction: column;
  }

  z-index: 200;

  #toyo {
    width: 100%;
    height: 100%;
  }

  #wit {
    width: 100%;
    height: 100%;
  }

  #p2e-bg {
    display: block;
    position: absolute;
    align-self: flex-start;
    margin-top: -2rem;
    width: 100%;
    height: 100vh;
    background-color: hsla(28, 100%, 26%, 1);
    overflow: visible;
    z-index: 100;
  }

  #p2e {
    flex-direction: column;
    width: 100%;
    height: 132vh;
    background-color: hsla(28, 100%, 40%, 1);
  }

  #pvp-bg {
    display: block;
    position: absolute;
    align-self: flex-start;
    margin-top: -2rem;
    width: 100%;
    height: 130vh;

    background-color: hsla(360, 100%, 52%, 0.7);
    overflow: visible;
    z-index: 100;
  }

  #pvp {
    margin-top: 10%;
    width: 100%;
    height: 60vh;
  }

  #collect {
    flex-direction: column;
    position: relative;
    margin-top: -8rem;
    width: 100%;
    height: 100vh;
  }

  #customize {
    flex-direction: column;
    position: relative;
    margin-bottom: 8rem;
    width: 100%;
    height: 100vh;
  }
`;

const Menu = styled.div`
  display: block;
  position: fixed;
  top: 4rem;
  right: 16rem;
  width: 3rem;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }

  cursor: pointer;
  z-index: 1000;
`;

const GraffitiBackground = styled.section`
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 85vh;
  overflow: visible;
  background-color: hsla(28, 100%, 18%, 1);
  z-index: 100;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const GraffitiLogo = styled.section`
  display: inline-block;
  position: absolute;
  margin-top: 4rem;
  margin-left: 4rem;
  width: 96%;
  height: 60vh;

  overflow: visible;
  background-color: hsla(28, 100%, 26%, 1);
  z-index: 200;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const HomeCanvas = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  margin: 0 10rem;
  background-color: hsla(37, 82%, 50%, 1);
  overflow: visible;
  z-index: 300;

  #wit-wrapper {
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 50%;
    height: 100%;
  }

  #pvp-wrapper {
    padding: 2rem;
    width: 100%;
    height: 100%;
    background-color: hsla(270, 100%, 52%, 1);
  }

  #collect-title {
    width: 100%;
    height: 30%;
    background-color: hsla(270, 100%, 60%, 1);

    img {
      width: 100%;
      height: auto;
    }
  }

  #collect-wrapper {
    width: 100%;
    height: 70%;
    background-color: hsla(270, 100%, 70%, 1);

    #collect-text {
      display: flex;
      position: relative;
      align-self: flex-end;
      margin-right: auto;
      margin-left: 0rem;
      color: #fff;
      font-size: 0.64rem;
      line-height: 1.1rem;
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

      background-color: hsla(37, 82%, 50%, 1);

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  #customize-title {
    width: 100%;
    height: 30%;
    background-color: hsla(270, 100%, 60%, 1);

    img {
      width: 100%;
      height: auto;
    }
  }

  #customize-wrapper {
    width: 100%;
    height: 70%;
    background-color: hsla(270, 100%, 70%, 1);

    #customize-img {
      display: flex;
      position: relative;
      align-self: flex-end;
      margin-left: 0;
      margin-right: auto;
      width: 70%;
      height: 100%;
      max-width: 75%;

      background-color: hsla(37, 82%, 50%, 1);

      img {
        width: 100%;
        height: auto;
      }
    }

    #customize-text {
      display: flex;
      position: relative;
      align-self: flex-end;
      margin-right: auto;
      margin-left: 0;
      color: #fff;
      font-size: 0.64rem;
      line-height: 1.1rem;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};

  #wit-title {
    display: block;
    position: relative;
    margin: 0 auto;
    padding: 1rem;
    width: 60%;
    height: 8rem;
    max-height: 8rem;
    background-color: hsla(309, 100%, 25%, 0.5);

    img {
      width: 100%;
      height: auto;
      background-color: hsla(37, 82%, 50%, 0.8);
    }
  }

  #wit-text {
    display: block;
    position: relative;
    margin-top: 2rem;
    font-size: 0.64rem;
    line-height: 1.1rem;
  }

  #btn-discord {
    display: block;
    position: relative;
    align-self: center;
    justify-self: center;
    margin-top: 2rem;
    width: 20rem;
    height: 7.5rem;
    background-color: hsla(309, 100%, 25%, 0.5);
  }

  #p2e-top {
    display: flex;
    position: relative;
    align-self: center;
    margin-top: -2rem;
    min-width: 45%;
    max-width: 55%;
    height: 12rem;
    padding: 1rem;
    background-color: hsla(309, 100%, 25%, 0.8);
  }

  #title-p2e-bg {
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 1rem;
    margin-left: 1rem;
    width: 93%;
    height: 86%;
    background-color: hsla(309, 100%, 40%, 0.7);
    overflow: visible;
    z-index: 400;

    img {
      width: 100%;
      height: auto;
    }
  }

  #toyo-5 {
    display: block;
    position: absolute;
    align-self: center;
    margin-left: 8rem;
    width: 10rem;
    height: 100%;
    /* background-color: hsla(309, 100%, 70%, 0.7); */

    img {
      display: block;
      position: relative;
      top: -8rem;
      left: -2rem;
      align-self: center;
      width: 200%;
      height: auto;
    }

    overflow: visible;
    z-index: 300;
  }

  #title-p2e {
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 1rem;
    margin-left: 1rem;
    width: 93%;
    height: 86%;
    background-color: hsla(309, 100%, 70%, 0.7);
    overflow: visible;
    z-index: 400;
  }

  #p2e-text-blocks {
    align-self: center;
    justify-content: space-around;
    padding-top: 2rem;
    padding-left: 6rem;
    padding-right: 6rem;
    width: 75%;
    height: 18rem;
    background-color: hsla(309, 100%, 25%, 0.5);
  }

  #text-block-1 {
    left: 1rem;
  }

  #text-block-2 {
    right: 1rem;
  }

  #text-block-1,
  #text-block-2 {
    display: block;
    position: relative;
    align-self: flex-start;
    color: #fff;
    font-size: 0.64rem;
    line-height: 1.24rem;
    text-align: justify;
  }

  #p2e-neon-cards {
    align-self: center;
    justify-content: space-around;
    margin-top: 2rem;
    padding: 1rem;
    max-width: 75%;
    max-height: 22rem;
    background-color: hsla(309, 100%, 25%, 0.5);
  }

  #pvp-title {
    display: block;
    position: relative;
    width: 45%;
    height: 75%;
    max-width: 45%;
    max-height: 75%;
    background-color: hsla(63, 100%, 52%, 1);

    img {
      display: block;
      align-self: baseline;
      width: 100%;
      height: auto;
    }
  }

  #pvp-text {
    display: block;
    position: relative;
    margin-top: 0.8rem;
    color: #fff;
    font-size: 0.64rem;
    line-height: 1.1rem;
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
    margin-top: 2rem;
    margin-left: 2rem;
    padding-left: 2rem;
    max-width: 45%;
    max-height: 60%;

    background-color: hsla(309, 100%, 25%, 0.5);
    overflow: visible;

    img {
      position: relative;
      left: -2rem;
      padding-left: 1rem;
      width: 105%;
      height: auto;
    }

    z-index: 400;
  }

  #logo {
    display: block;
    position: relative;
    margin-right: 4rem;
    width: 12rem;
    height: 10rem;
    background-color: hsla(309, 100%, 25%, 0.5);
    z-index: 500;
  }

  #btn-video {
    display: block;
    position: relative;
    margin-top: 4rem;
    margin-right: 4rem;
    width: 12rem;
    height: 10rem;
    background-color: hsla(309, 100%, 25%, 0.5);
    z-index: 500;
  }

  #toyo-2 {
    display: block;
    position: relative;
    right: 4rem;
    margin-top: 10rem;
    padding-right: 2rem;
    max-width: 75%;
    max-height: 60%;

    background-color: hsla(309, 100%, 25%, 0.5);

    img {
      width: 110%;
      height: auto;
    }
    z-index: 400;
  }

  #toyo-3 {
    display: block;
    position: relative;
    align-self: flex-end;
    margin-top: -2rem;
    width: 25%;
    height: auto;
    max-width: 30%;

    background-color: hsla(309, 100%, 25%, 0.5);
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

  #toyo-4 {
    display: flex;
    position: relative;
    align-self: flex-start;
    margin-top: 4rem;
    width: 25%;
    max-width: 30%;
    height: auto;

    background-color: hsla(309, 100%, 25%, 0.5);

    img {
      width: 110%;
      height: auto;
    }
    z-index: 400;
  }

  .neon-card {
    width: 30%;
    height: 100%;
    background-color: hsla(309, 100%, 25%, 0.5);

    .neon-card-border {
      display: block;
      position: relative;
      align-self: flex-start;
      margin-bottom: 1.5rem;
      max-width: 100%;
      height: 12rem;
      max-height: 18rem;
      background-color: hsla(309, 100%, 55%, 0.5);

      img {
        width: 100%;
        height: auto;
      }
      z-index: 300;

      .neon-card-bg {
        display: block;
        position: relative;
        align-self: center;
        justify-self: center;
        justify-content: center;
        margin: 0 auto;
        left: 0;
        top: 0.4rem;
        width: 75%;
        height: 75%;
        background-color: hsla(208, 100%, 32%, 0.5);
        z-index: 400;
      }

      .neon-card-items {
        display: block;
        position: relative;
        align-self: center;
        justify-self: center;
        justify-content: center;
        margin: 0 auto;
        left: 0;
        top: -8.6rem;
        width: 75%;
        height: 90%;
        background-color: hsla(57, 100%, 50%, 0.5);
        z-index: 600;
      }
    }
  }

  .neon-card-info {
    text-align: center;
    color: #fff;

    .neon-card-title {
      font-size: 0.8rem;
    }

    .neon-card-text {
      padding: 0 1rem;
      margin-top: 0.8rem;
      font-size: 0.64rem;
      line-height: 1.1rem;
    }
  }

  #pvp-video {
    display: block;
    position: absolute;
    width: 45%;
    height: 80%;
    right: 2rem;
    background-color: hsla(63, 100%, 52%, 1);
  }
`;

export {
  Body,
  Section,
  GraffitiBackground,
  GraffitiLogo,
  HomeCanvas,
  Column,
  Row,
  Menu,
};
