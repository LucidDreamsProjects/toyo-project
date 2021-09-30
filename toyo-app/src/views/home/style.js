import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100vw;
  height: auto;
  min-height: 100vh;
  overflow: hidden;
  overflow-x: hidden;
  /* background: yellow; */

  .flex {
    display: flex;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  #menu {
    display: flex;
    position: fixed;
    top: 4vh;
    left: 77vw;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    /* background: blue; */
    z-index: 500;

    @media screen and (min-width: 560px) and (max-height: 1024px) {
      top: 4rem;
      width: 4rem;
      height: 4rem;
    }

    @media screen and (min-width: 1280px) {
      img {
        width: 5rem;
        height: 5rem;
      }
    }

    @media screen and (min-width: 1920px) {
      top: 8vh;
      left: 82vw;
      width: 6rem;
      height: 6rem;
    }
  }

  #top--section {
    display: flex;
    position: relative;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    /* height: 102.25vh; */
    /* clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%); */
    /* background: blue; */

    #top--bg {
      position: absolute;
      left: 0;
      top: 0;
      min-width: 100%;
      height: 100%;
      /* clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%); */
      /* background: yellow; */
      z-index: 10;

      img {
        width: 500%;
        height: 115vh;
      }
    }

    #top--lucido {
      display: inline-block;
      position: relative;
      width: 25%;
      height: auto;
      /* background: yellow; */
      transform: rotate(-12.5deg);
      z-index: 200;

      img {
        position: relative;
        top: 12rem;
        left: -14.5rem;
        width: 1000%;
        height: auto;
      }
    }

    #top--col {
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-top: 2rem;
      width: 75%;
      height: 90%;
      z-index: 300;
      /* background: green; */

      #top--logo {
        display: inline-block;
        position: relative;
        margin: 0 auto;
        top: -1rem;
        width: 100%;
        min-height: 38%;
        /* background: blue; */

        img {
          position: relative;
          left: -12.5rem;
          width: 800%;
          height: auto;
        }
      }

      #top--btn {
        display: inline-block;
        position: relative;
        top: -8.5rem;
        left: 12%;
        width: 100%;
        min-height: 38%;
        /* background: blue; */
        z-index: 400;

        img {
          position: relative;
          top: 4rem;
          left: -11rem;
          width: 650%;
          height: auto;
        }
      }
    }

    #top--ninja {
      display: inline-block;
      position: relative;
      width: 25%;
      height: auto;
      z-index: 400;
      /* background: yellow; */
      transform: rotate(-10deg);

      img {
        position: relative;
        top: 6rem;
        left: -4rem;
        width: 1000%;
        height: auto;
      }
    }

    @media screen and (min-width: 768px) and (min-height: 1024px) {
      #top--bg {
        width: 100%;
        height: 100%;

        img {
          width: 500%;
          min-height: 100%;
        }
      }

      #top--lucido {
        img {
          top: 18rem;
          left: -26rem;
        }
      }

      #top--col {
        #top--logo {
          img {
            left: -21rem;
            width: 400%;
          }
        }

        #top--btn {
          img {
            left: -16rem;
            width: 300%;
          }
        }
      }

      #top--ninja {
        top: 6rem;
        left: -4rem;
      }
    }

    @media screen and (min-width: 1280px) {
      align-items: center;

      #top--bg {
        height: 125%;

        img {
          width: 100%;
          min-height: 125%;
        }
      }

      #top--lucido {
        img {
          top: 10rem;
          left: -25rem;
          width: 775%;
        }
      }

      #top--col {
        #top--logo {
          img {
            top: 2rem;
            left: -12rem;
            width: 150%;
            height: auto;
          }
        }

        #top--btn {
          width: 70%;
          top: -6rem;
          left: -8rem;
          /* transform: rotate(-18deg); */

          img {
            left: 0rem;
            width: 175%;
          }
        }
      }

      #top--ninja {
        img {
          left: -12rem;
          width: 775%;
        }
      }
    }

    @media screen and (min-width: 1440px) {
      #top--lucido {
        img {
          top: 12rem;
        }
      }

      #top--col {
        #top--logo {
          img {
            top: 2rem;
            left: -8rem;
            width: 115%;
          }
        }

        #top--btn {
          width: 70%;
          top: 0;
          left: -6rem;
          /* transform: rotate(-18deg); */

          img {
            width: 140%;
          }
        }
      }

      #top--ninja {
        img {
          left: -16rem;
        }
      }
    }

    @media screen and (min-width: 1920px) {
      #top--bg {
        height: 125%;

        img {
          width: 100%;
          min-height: 125%;
        }
      }

      #top--lucido {
        transform: rotate(-16deg);

        img {
          top: 18rem;
          left: -26rem;
          width: 800%;
        }
      }

      #top--col {
        #top--logo {
          top: 0rem;
          left: 8rem;

          img {
            width: 100%;
            max-height: 100%;
            left: -17rem;
          }
        }

        #top--btn {
          width: 80%;
          top: 4rem;
          left: -13.25rem;
          /* transform: rotate(-18deg); */

          img {
            width: 140%;
          }
        }
      }

      #top--ninja {
        transform: rotate(-15deg);

        img {
          top: 2rem;
          left: -21rem;
          width: 800%;
        }
      }
    }
  }

  #drop--section {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 205vh;
    max-height: 290vh;
    /* background: yellow; */

    #drop--bg {
      display: inline-block;
      position: absolute;
      /* margin-top: -14.5rem; */
      top: -44rem;
      width: 100%;
      height: 100%;
      /* clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%); */
      /* background: yellow; */
      z-index: 1;

      /* background-image: url("../../assets/images/drop/drop-bg.png");
      background-size: contain; */

      img {
        min-width: 100%;
        height: 85%;
      }
    }

    #drop--paragraph {
      display: flex;
      position: absolute;
      padding: 1rem;
      top: 82rem;
      left: 1rem;
      width: 90%;
      height: 16rem;
      z-index: 200;
      color: #fff;
      text-align: justify;
      font-size: 1.25rem;
      /* background: yellow; */
    }

    #drop--image {
      display: flex;
      flex-direction: column;
      position: relative;
      margin: 0 auto;
      width: 90%;
      height: 52rem;
      /* background: blue; */
      z-index: 100;

      #drop--samurai {
        display: flex;
        position: absolute;
        left: -76%;
        width: 250%;
        height: auto;
        /* background: yellow; */
        z-index: 300;

        img {
          display: inline-block;
          position: relative;
          width: 100%;
          height: auto;
        }
      }

      #drop--toyo--title {
        display: flex;
        position: absolute;
        width: 100%;
        height: 6rem;
        top: 33.25rem;
        z-index: 200;
        /* background: yellow; */

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    #drop--counter {
      display: flex;
      position: absolute;
      justify-content: center;
      top: 54rem;
      left: 1rem;
      width: 90%;
      height: 6rem;
      color: #fff;
      font-size: 4.25rem;
      z-index: 300;
      /* background: yellow; */
    }

    #drop--samurai--bg {
      width: 65%;
      height: auto;
      /* background: yellow; */
      z-index: 300;

      img {
        position: relative;
        top: 9rem;
        left: 8rem;
        width: 160%;
        height: auto;
      }
    }

    @media screen and (min-width: 768px) and (min-height: 1024px) {
      height: 240vh;

      #drop--bg {
        img {
          height: 73.5%;
        }
      }

      #drop--paragraph {
        width: 100%;
        padding: 0 2.5rem;
        left: 0;
        top: 114rem;
        font-size: 1.84rem;
      }

      #drop--image {
        #drop--samurai {
          left: -5rem;
          width: 125%;
        }

        #drop--toyo--title {
          height: 12rem;
        }
      }

      #drop--counter {
        top: 66rem;
        left: 2rem;
        font-size: 8rem;
        color: #fff;
      }

      #drop--samurai--bg {
        img {
          top: 38rem;
          left: 12rem;
          width: 175%;
        }
      }
    }

    @media screen and (min-width: 1280px) {
      min-height: 100vh;
      height: 125vh;
      max-height: 150vh;
      /* background: yellow; */

      #drop--bg {
        top: -8rem;
        height: 76%;

        img {
          width: 175%;
          min-height: 100%;
        }
      }

      #drop--paragraph {
        top: 80rem;
        left: 5rem;
        width: 26%;
        height: auto;
        font-size: 1.2rem;
        line-height: 1.8rem;
      }

      #drop--image {
        width: 40%;
        height: 40%;
        max-height: 50%;
        top: 10rem;

        #drop--samurai {
          width: 175%;
          left: -38%;

          img {
            width: 100%;
            height: auto;
          }
        }

        #drop--toyo--title {
          height: 10rem;
          top: 35rem;
        }
      }

      #drop--counter {
        top: 46rem;
        left: -0.5rem;
        width: 100%;
        font-size: 5.26rem;
        color: #fff;
      }

      #drop--samurai--bg {
        /* transform: rotate(18deg); */

        img {
          top: 44rem;
          left: 6rem;
          width: 65%;
        }
      }
    }

    @media screen and (min-width: 1440px) {
      height: 125vh;
      max-height: 150vh;

      #drop--bg {
        top: -8rem;
        height: 74%;

        img {
          width: 175%;
          min-height: 100%;
        }
      }

      #drop--paragraph {
        top: 94rem;
        left: 6rem;
      }

      #drop--image {
        height: 50%;

        #drop--toyo--title {
          top: 39.5rem;
        }

        #drop--counter {
          top: 54rem;
        }
      }

      #drop--samurai--bg {
        img {
          top: 50rem;
        }
      }
    }

    @media screen and (min-width: 1920px) {
      /* margin-top: 50vh; */
      height: 125vh;
      max-height: 150vh;

      #drop--bg {
        height: 73%;
      }

      #drop--paragraph {
        top: 122rem;
        left: 8rem;
        font-size: 1.86rem;
        line-height: 2rem;
      }

      #drop--image {
        #drop--samurai {
          width: 200%;
          left: -46%;

          img {
            width: 100%;
            height: auto;
          }
        }

        #drop--toyo--title {
          top: 61rem;
          height: 14rem;
        }

        #drop--counter {
          top: 80rem;
          letter-spacing: 1.4rem;
          font-size: 7.64rem;
        }
      }

      #drop--samurai--bg {
        img {
          top: 82rem;
        }
      }
    }
  }

  #wat--section {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 265vh;
    max-height: 280vh;
    /* background: green; */
    overflow: visible;

    #wat--title {
      display: flex;
      position: relative;
      top: 1rem;
      left: 0rem;
      margin: 0 auto;
      margin-top: 1.5rem;
      width: 82.5%;
      height: auto;
      /* background: yellow; */
      z-index: 300;

      img {
        width: 100%;
        height: auto;
      }
    }

    #wat--video {
      display: inline-block;
      position: relative;
      left: 0rem;
      margin: 0 auto;
      margin-top: 0rem;
      width: 95%;
      height: auto;
      /* background: yellow; */
      z-index: 200;

      img {
        width: 100%;
        height: auto;
      }
    }

    #wat--player {
      display: inline-block;
      position: relative;
      width: 40%;
      height: auto;
      z-index: 300;

      img {
        position: relative;
        top: -12rem;
        left: 7rem;
        width: 100%;
        height: auto;
      }
    }

    #wat--toyo {
      display: inline-block;
      position: absolute;
      top: 35rem;
      left: -2rem;
      width: 16rem;
      height: auto;
      /* background: blue; */
      z-index: 300;

      img {
        width: 100%;
        height: auto;
      }
    }

    #wat--wrapper {
      display: flex;
      position: relative;
      z-index: 200;

      #wat--desc {
        display: flex;
        position: relative;
        margin: 0 auto;
        margin-top: 1.5rem;
        top: -13rem;
        width: 90%;
        height: auto;
        font-size: 2.4rem;
        font-style: italic;
        font-weight: 900;
        line-height: 2.8rem;
        color: #000;
        /* background: yellow; */
      }

      #wat--paragraph {
        display: flex;
        position: relative;
        margin: 1.5rem auto;
        margin-bottom: 0;
        top: -11.75rem;
        left: 5rem;
        width: 42.5%;
        height: 24rem;
        color: #000;
        text-align: right;
        font-family: monospace;
        line-height: 1.2rem;
        letter-spacing: 0.075rem;
        font-size: 0.95rem;
        /* background: yellow; */
      }

      #wat--discord--btn {
        display: flex;
        position: relative;
        margin: 1.5rem auto;
        top: -4rem;
        left: 0.2rem;
        width: 80%;
        height: 6rem;
        /* background: yellow; */

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    #wat--bg {
      display: inline-block;
      position: absolute;
      top: 70rem;
      left: 8rem;
      width: 14rem;
      height: 26rem;
      /* background: blue; */
      z-index: 100;
      overflow: visible;

      img {
        display: inline-block;
        position: relative;

        top: -5rem;
        left: -28rem;
        width: 325%;
        height: auto;
      }
    }

    @media screen and (min-width: 768px) and (min-height: 1024px) {
      height: 290vh;
      max-height: 310vh;

      #wat--title {
        margin-top: 2rem;
      }

      #wat--player {
        img {
          top: -25rem;
          left: 14rem;
        }
      }

      #wat--toyo {
        top: 64rem;
        left: 3rem;

        img {
          width: 150%;
        }
      }

      #wat--wrapper {
        #wat--desc {
          top: -24rem;
          left: 0rem;
          width: 100%;
          text-align: center;
          font-size: 3.64rem;
          line-height: 4.8rem;
        }

        #wat--paragraph {
          top: -19rem;
          left: 11rem;
          font-size: 1.4rem;
          line-height: 1.8rem;
        }

        #wat--discord--btn {
          top: 6rem;
          left: 0rem;
          width: 60%;
          height: 8rem;
        }
      }

      #wat--bg {
        top: 110rem;
        left: -7rem;

        img {
          width: 600%;
        }
      }
    }

    @media screen and (min-width: 1280px) {
      top: 90vh;
      height: 300vh;
      max-height: 320vh;
      /* background: yellow; */

      #wat--title {
        width: 45%;
        top: 3rem;
        left: 12.5rem;
      }

      #wat--video {
        width: 65%;
      }

      #wat--player {
        top: -13rem;
        left: 25rem;

        img {
          width: 50%;
        }
      }

      #wat--toyo {
        top: 40rem;
        left: 4rem;

        img {
          width: 160%;
        }
      }

      #wat--wrapper {
        #wat--desc {
          top: -18rem;
          width: 32%;
          font-size: 3rem;
          line-height: 3.2rem;
        }

        #wat--paragraph {
          top: -14rem;
          width: 30%;
          text-align: justify;
          font-size: 1.18rem;
          line-height: 1.5rem;
        }

        #wat--discord--btn {
          top: -18rem;
          width: 32%;
          height: 8rem;
        }
      }

      #wat--bg {
        top: 20rem;
        left: 30rem;

        img {
          left: 0rem;
          width: 400%;
        }
      }
    }

    @media screen and (min-width: 1440px) {
      #wat--toyo {
        top: 44rem;
        left: 6rem;
      }

      #wat--bg {
        top: 24rem;
        left: 36rem;
      }
    }

    @media screen and (min-width: 1920px) {
      top: 130vh;
      height: 370vh;
      max-height: 385vh;

      #wat--title {
        width: 50%;
        top: 4rem;
        left: 16.5rem;
      }

      #wat--player {
        top: -11rem;
        left: 34rem;

        img {
          width: 50%;
        }
      }

      #wat--wrapper {
        #wat--desc {
          top: -26rem;
          left: 4rem;
          width: 36%;
          font-size: 3.86rem;
          line-height: 4.2rem;
          text-align: left;
        }

        #wat--paragraph {
          top: -18rem;
          left: 8rem;
          width: 28%;
          text-align: justify;
          font-size: 1.86rem;
          line-height: 2rem;
        }

        #wat--discord--btn {
          top: -10rem;
          width: 40%;
          height: 12rem;
        }
      }

      #wat--toyo {
        top: 56rem;
        left: 8rem;

        img {
          width: 225%;
        }
      }

      #wat--bg {
        top: 28rem;

        img {
          left: 10rem;
          width: 550%;
        }
      }
    }
  }
`;

export { Body };
