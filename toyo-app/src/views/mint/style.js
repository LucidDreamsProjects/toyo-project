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

  .canvas {
    display: flex;
    align-self: center;
    justify-content: center;
    width: 75vw;
    height: auto;
  }

  @media screen and (orientation: portrait) {
    .canvas {
      width: 100vw;
    }
  }

  .flex {
    display: flex;
    /* flex-direction: row; */
    width: 100%;
    height: auto;
  }

  @media screen and (orientation: portrait) {
    .flex {
      flex-direction: column;
    }
  }

  .row {
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: row;
  }

  .col {
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
  }

  #mint--wrapper {
    display: flex;
    flex-direction: column;
    width: 100vw;
    /* max-width: 100vw; */
    height: auto;
    overflow: hidden;
  }

  #top--wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    /* background: yellow; */
  }

  #top--bg {
    display: flex;
    position: absolute;
    left: -23rem;
    width: 325%;
    height: auto;
    background: #000;
    z-index: 5;

    img {
      display: inline-flex;
      position: relative;
      left: -10rem;
      width: 100%;
      /* height: 120vh; */
    }
  }

  #top--logo {
    display: flex;
    position: relative;
    align-self: center;
    margin-top: 4rem;
    margin-right: 1rem;
    width: 65%;
    max-width: 250px;
    height: auto;
    /* background: yellow; */
    z-index: 100;

    img {
      display: inline-flex;
      position: relative;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: auto;
    }
  }

  #top--title {
    display: flex;
    position: relative;
    align-self: center;
    margin-top: -3rem;
    margin-bottom: 2rem;
    width: 85%;
    height: auto;
    /* background: yellow; */
    z-index: 100;

    img {
      display: inline-flex;
      position: relative;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: auto;
    }
  }

  #top--btns {
    display: flex;
    flex-direction: row;
    position: relative;
    align-self: center;
    justify-content: space-between;
    width: 90%;
    height: auto;
    z-index: 100;
    background: yellow;

    #top--metamask--btn {
      display: inline-flex;
      position: relative;
      order: 1;
      width: 45%;
      height: 3rem;
      background: blue;
    }

    #top--recaptcha--btn {
      display: inline-flex;
      position: relative;
      order: 2;
      width: 45%;
      height: 3rem;
      background: blue;
    }
  }

  @media screen and (max-width: 375px) and (min-height: 725px) and (max-height: 824px) {
    #top--wrapper {
      margin-top: 3rem;
    }

    #top--bg {
      img {
        height: 105vh;
      }
    }
  }

  @media screen and (min-width: 391px) and (max-width: 430px) and (max-height: 950px) {
    #top--bg {
      left: -28rem;
    }
  }

  @media screen and (min-width: 1280px) {
    .canvas {
      width: 50vw;
      height: auto;
      /* background: pink; */
    }

    #top--bg {
      top: 0;
      left: 0;
      width: 100%;
      height: 120vh;

      img {
        top: 0;
        left: 0;
      }
    }

    #top--logo {
      top: 0;
      left: 0;
      min-width: 56%;
      max-width: 60%;
    }

    #top--title {
      top: -9rem;
      width: 64%;
    }

    #top--btns {
      top: -8rem;
      width: 72%;
    }
  }

  @media screen and (min-width: 1366px) {
    #top--logo {
      top: -2rem;
    }

    #top--title {
      top: -12rem;
      width: 50%;
    }

    #top--btns {
      top: -12rem;
    }
  }

  @media screen and (min-width: 1440px) {
    #top--logo {
      top: 0rem;
      min-width: 70%;
      max-width: 75%;
    }

    #top--title {
      top: -13rem;
    }

    #top--btns {
      top: -12rem;
    }
  }

  @media screen and (min-width: 1920px) {
    #top--logo {
      top: -2rem;
    }

    #top--title {
      top: -22rem;
    }

    #top--btns {
      top: -20rem;
      height: 4rem;

      #top--metamask--btn {
        height: 100%;
      }

      #top--recaptcha--btn {
        height: 100%;
      }
    }
  }

  @media screen and (min-width: 2060px) {
    #top--logo {
      top: 0;
    }

    #top--title {
      top: -20rem;
    }

    #top--btns {
      height: 6rem;
    }
  }

  #drop--wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: auto;
  }

  #drop--bg {
    display: flex;
    position: absolute;
    top: -185vh;
    width: 750%;
    min-height: 600vh;
    max-height: 625vh;
    /* background: #000; */
    z-index: 1;

    img {
      display: inline-flex;
      position: relative;
      width: 100%;
      height: auto;
    }
  }

  .drop--token {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    position: relative;
    top: 3rem;
    margin-bottom: 8rem;
    width: 85%;
    height: auto;
    background: yellow;
    z-index: 100;

    .drop--title {
      display: inline-flex;
      position: relative;
      order: 1;
      width: 80%;
      font-size: 2.26rem;
      font-weight: 900;
      color: #fff;
    }

    .drop--supply {
      display: inline-flex;
      position: relative;
      top: 1.3rem;
      order: 2;
      width: 20%;
      font-size: 0.94rem;
      font-style: italic;
      color: #fff;
    }

    .drop--unity {
      display: inline-flex;
      position: relative;
      margin: 0 auto;
      width: 75%;
      height: 18rem;
      background: #c9c9c9;
    }

    .drop--info {
      display: inline-flex;
      flex-direction: column;
      position: relative;
      left: -3.25rem;
      margin: 1rem auto;
      width: 65%;
      font-size: 0.75rem;
      color: #fff;

      p:nth-child(3) {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    }

    .drop--price {
      display: inline-flex;
      flex-direction: row;
      position: relative;
      left: 0.4rem;
      margin: 0 auto;
      width: 90%;

      h3 {
        font-size: 2rem;
        font-weight: 900;
        color: #fff;
      }
    }

    .drop--price--matic {
      display: inline-flex;
      position: relative;
      top: 0.7rem;
      left: -2rem;

      h3 {
        font-size: 1.46rem;
        font-weight: 900;
        color: lightblue;
      }
    }

    .drop--mint--btn {
      display: inline-flex;
      position: relative;
      margin: 0 auto;
      margin-top: 1rem;
      width: 84%;
      height: 6rem;
      background: purple;
    }

    .drop--mint--counter {
      display: inline-flex;
      position: relative;
      margin-left: auto;
      margin-right: 2.5rem;
      font-weight: 800;
      font-style: italic;
    }

    .drop--rarity {
      display: flex;
      flex-direction: row;
      position: relative;
      justify-content: space-between;
      margin: 0 auto;
      margin-top: 2rem;
      margin-bottom: 2rem;
      left: 0.75rem;
      width: 92%;

      tr > td {
        display: inline-flex;
        flex-direction: column;
        margin: 0.5rem 0;
      }
    }
  }

  @media screen and (max-height: 640px) {
    #drop--bg {
      min-height: 635vh;
    }
  }

  @media screen and (max-width: 375px) and (min-height: 725px) and (max-height: 824px) {
    #drop--bg {
      min-height: 530vh;
      max-height: 540vh;
    }

    .drop--token {
      top: -2rem;
    }
  }

  @media screen and (min-width: 376px) and (max-width: 390px) and (max-height: 844px) {
    #drop--bg {
      min-height: 520vh;
      max-height: 530vh;
    }

    .drop--token {
      top: -3rem;
    }
  }

  @media screen and (min-width: 391px) and (max-width: 430px) and (max-height: 950px) {
    #drop--bg {
      min-height: 485vh;
      max-height: 500vh;
    }

    .drop--token {
      top: -5rem;
    }
  }

  @media screen and (min-width: 1280px) {
    .canvas {
      min-width: 50vw;
      width: 65vw;
      height: auto;
    }

    .flex {
      flex-direction: row;
    }

    #drop--wrapper {
      top: 10rem;
      height: 240vh;
      max-height: 240vh;
      /* background: green; */

      #drop--bg {
        top: -86vh;
        width: 100%;
        height: 100vh;
        min-height: 385vh;
        max-height: 385vh;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .drop--token {
        flex-direction: row;
        height: 36rem;

        .drop--unity {
          margin: 0;
          width: 75%;
          height: 75%;
        }

        .drop--info--one {
          margin-top: 1rem;
          color: #fff;
        }

        .drop--title {
          display: flex;
          margin-left: auto;
          margin-right: 0;
          font-weight: 900;
          text-align: italic;
        }

        .drop--supply {
          right: 0.5rem;
        }

        .drop--info--two {
          margin: 1rem 0;
          color: #fff;

          p {
            margin: 0.25rem 0;
          }
        }

        .drop--price--matic {
          top: 0.75rem;
          left: -3rem;
        }

        .drop--mint--btn {
          width: 86%;
          left: -1rem;
        }

        .drop--mint--counter {
          top: 0.5rem;
          margin-right: 2.75rem;
        }

        .drop--rarity {
          flex-wrap: nowrap;
          margin: 0;
          width: 70%;
          color: #fff;
        }
      }
    }
  }

  @media screen and (min-width: 1366px) {
    #drop--wrapper {
      height: 260vh;
      max-height: 260vh;
      /* background: blue; */

      #drop--bg {
        top: -125vh;
        min-height: 115%;
        max-height: 125%;

        img {
          min-height: 175%;
        }
      }

      .drop--token {
        .drop--mint--counter {
          left: -0.8rem;
        }

        .drop--rarity {
          top: 2rem;
          width: 50%;

          .drop--rarity--right {
            position: relative;
            left: 11rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    #drop--wrapper {
      #drop--bg {
        top: -125vh;
        min-height: 115%;
        max-height: 125%;

        img {
          min-height: 155%;
          max-height: 165%;
        }
      }

      .drop--token {
        top: 10rem;

        .drop--unity {
          width: 70%;
        }

        .drop--info--one {
          font-size: 1.36rem;
        }

        #drop--info {
          width: 75%;

          .drop--info--two {
            font-size: 1.36rem;
          }

          .drop--price {
            font-size: 1.64rem;
          }

          .drop--price--matic {
            font-size: 1.64rem;
          }

          .drop--mint--counter {
            margin-right: 3.75rem;
          }

          .drop--rarity {
            width: 55%;

            .drop--rarity--right {
              position: relative;
              left: 8rem;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1920px) {
    #drop--wrapper {
      .drop--token {
        top: 10rem;
        width: 50%;

        .drop--unity {
          width: 60%;
          height: 90%;
        }
      }
    }
  }

  @media screen and (min-width: 2060px) {
    #drop--wrapper {
      height: 135vh;
      max-height: 135vh;
      /* background: yellow; */

      #drop--bg {
        top: -40vh;
        min-height: 135%;
        max-height: 145%;

        img {
          min-height: 125%;
          max-height: 135%;
        }
      }
    }
  }

  #story--wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: -2rem;
    width: 100%;
    height: auto;
    min-height: 185vh;
    max-height: 195vh;
    /* background: yellow; */
    z-index: 100;
  }

  #story--title {
    display: inline-flex;
    position: relative;
    margin: 0 auto;
    width: 80%;
    height: 6rem;
    background: blue;
  }

  #story--landscape {
    display: inline-flex;
    position: relative;
    margin: 0 auto;
    margin-top: 1.5rem;
    width: 90%;
    height: 12rem;
    background: #c9c9c9;
  }

  #story--slots {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    margin-top: 0.5rem;
    margin-left: 1.2rem;
    width: 3.2rem;
    height: 0.8rem;
    /* background: blue; */

    .story--slots--block {
      display: inline-block;
      width: 26%;
      height: 100%;
      background: green;
    }
  }

  #story--toyo--img {
    display: inline-flex;
    position: relative;
    margin-left: auto;
    margin-right: 0;
    top: -10rem;
    right: 1.6rem;
    width: 10rem;
    height: 16rem;
    background: blue;
    z-index: 200;
  }

  #story--toyo--paragraph {
    display: flex;
    flex-direction: column;
    position: relative;
    top: -8rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 90%;
    text-align: justify;
  }

  @media screen and (max-width: 640px) {
    #story--wrapper {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 375px) and (min-height: 725px) and (max-height: 824px) {
    #story--wrapper {
      margin-top: -4rem;
      min-height: 165vh;
      max-height: 175vh;
    }
  }

  @media screen and (min-width: 376px) and (max-width: 390px) and (max-height: 844px) {
    #story--wrapper {
      margin-top: -12rem;
    }
  }

  @media screen and (min-width: 391px) and (max-width: 430px) and (max-height: 950px) {
    #story--wrapper {
      top: -8rem;
      min-height: 125vh;
      max-height: 135vh;
    }

    #story--slots {
      margin-left: 1.4rem;
    }
  }

  @media screen and (min-width: 1280px) {
    .canvas--right {
      display: flex;
      width: 65vw;
      margin-left: auto;
      margin-right: -2rem;
    }

    #story--wrapper {
      margin-top: 0;
      height: 100vh;
      min-height: 110vh;
      max-height: 110vh;
      /* background: yellow; */
    }

    #story--title {
      width: 55%;
      height: 8rem;
    }

    #story--landscape {
      margin-top: 4rem;
      width: 70%;
      height: 18rem;
    }

    #story--slots {
      margin-left: 8.2rem;
    }

    #story--toyo--img {
      top: -12rem;
      right: 10rem;
      width: 14rem;
      height: 22rem;
    }

    #story--toyo--paragraph {
      width: 50%;
      top: -41.5rem;
      right: 35rem;
    }
  }

  @media screen and (min-width: 1366px) {
    #story--wrapper {
      margin-top: 14rem;
      min-height: 140vh;
      max-height: 150vh;
    }

    #story--toyo--paragraph {
      top: -32.5rem;
      right: 40rem;
      width: 54%;
    }
  }

  @media screen and (min-width: 1440px) {
    #story--wrapper {
      margin-top: -4rem;
      min-height: 130vh;
      max-height: 140vh;
    }

    #story--toyo--paragraph {
      top: -34rem;
      right: 42rem;
      width: 60%;
      font-size: 1.26rem;
    }

    #story--slots {
      margin-top: 1rem;
      margin-left: 8.75rem;
    }
  }

  @media screen and (min-width: 1920px) {
    #story--wrapper {
      min-height: 120vh;
      max-height: 130vh;
    }

    #story--title {
      height: 10rem;
    }

    #story--landscape {
      height: 26rem;
    }

    #story--slots {
      margin-left: 11.75rem;
    }

    #story--toyo--img {
      top: -16rem;
      right: 16rem;
      width: 18rem;
      height: 28rem;
    }

    #story--toyo--paragraph {
      top: -44rem;
      right: 55rem;
    }
  }

  @media screen and (min-width: 2060px) {
    #story--wrapper {
      margin-top: 10rem;
      min-height: 80vh;
      max-height: 90vh;

      #story--title {
        height: 12rem;
      }

      #story--landscape {
        height: 30rem;
      }

      #story--slots {
        margin-top: 1rem;
        margin-left: 12.75rem;
        width: 5.5rem;
        height: 1.25rem;
      }

      #story--toyo--paragraph {
        top: -50rem;
        right: 59rem;
        font-size: 1.46rem;
      }
    }
  }

  #fight--wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: auto;
  }

  #fight--bg {
    display: inline-block;
    position: absolute;
    width: 100%;
    top: -14vh;
    height: 500vh;
    background: #c9c9c9;
  }

  #fight--title {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: auto;

    h2 {
      display: inline-flex;
      position: relative;
      right: 2.5rem;
      margin-left: auto;
      margin-right: 0;
      font-size: 1.64rem;
      font-style: italic;
      color: #fff;
    }

    img {
      position: relative;
      margin: 0 auto;
      width: 80%;
      height: 6rem;
      background: blue;
    }
  }

  #fight--toyos {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    margin: 2rem auto;
    width: 90%;
    height: 2rem;
    background: yellow;
    z-index: 100;

    #fight--toyos--image {
      display: inline-block;
      width: 10%;
      height: 100%;
      background: blue;
    }
  }

  .fight--toyo--concepts {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 2rem;
    width: 100%;
    height: auto;
    /* background: yellow; */

    .fight--toyo--concept {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem auto;
      width: 100%;
      height: 40vh;
      overflow: visible;
      background: lightblue;

      .fight--toyo--concept--image {
        display: inline-block;
        position: relative;
        width: 80%;
        height: 90%;
        background: green;

        img {
          width: 100%;
          height: auto;
        }
      }

      .fight--toyo--concept--info {
        display: flex;
        flex-direction: column;
        width: 100%;
        color: #fff;
        padding: 1rem;
        text-align: left;
        /* background: pink; */

        h2 {
          font-size: 2.18rem;
          font-style: italic;
        }

        h3 {
          font-size: 1.36rem;
        }

        p {
          margin-top: 1rem;
          font-size: 0.86rem;
        }
      }
    }
  }

  @media screen and (max-width: 375px) and (min-height: 725px) and (max-height: 824px) {
    .fight--toyo--concepts {
      .fight--toyo--concept {
        .fight--toyo--concept--image {
          height: 75%;
        }
      }
    }
  }

  @media screen and (min-width: 376px) and (max-width: 390px) and (max-height: 844px) {
    #fight--wrapper {
      top: -6rem;
    }

    .fight--toyo--concepts {
      .fight--toyo--concept {
        height: 36vh;
      }
    }
  }

  @media screen and (min-width: 391px) and (max-width: 430px) and (max-height: 950px) {
    #fight--wrapper {
      top: -6rem;
    }

    .fight--toyo--concepts {
      .fight--toyo--concept {
        height: 32vh;

        .fight--toyo--concept--image {
          display: inline-block;
          position: relative;
          width: 80%;
          height: 80%;
          background: green;

          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1280px) {
    #fight--wrapper {
      margin: 0;
      top: 4rem;
      height: 110vh;
      max-height: 110vh;
      background: yellow;
    }

    #fight--bg {
      height: 108%;
    }

    #fight--title {
      width: 70%;
      margin-left: auto;
      margin-right: 0;

      h2 {
        position: relative;
        top: -0.5rem;
        margin-right: 1.4rem;
      }
    }

    #fight--toyos {
      margin-top: 4rem;
      width: 65%;
      height: 3.2rem;
    }

    .fight--toyo--concepts {
      .fight--toyo--concept {
        width: 65%;

        .fight--toyo--concept--info {
          position: relative;
          top: -2.5rem;
          margin: 0 auto;
          width: 80%;

          h2 {
            font-size: 2.84rem;
          }

          h3 {
            font-size: 1.24rem;
          }

          p {
            font-size: 1.12rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1366px) {
    #fight--bg {
      height: 106%;
    }

    .fight--toyo--concepts {
      .fight--toyo--concept {
        .fight--toyo--concept--info {
          top: -1.1rem;
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    #fight--bg {
      height: 108%;
    }

    .fight--toyo--concepts {
      .fight--toyo--concept {
        .fight--toyo--concept--info {
          top: -2.75rem;

          h2 {
            font-size: 3.24rem;
          }

          p {
            font-size: 1.26rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1920px) {
    #fight--wrapper {
      top: 8rem;
      height: 125vh;
      max-height: 125vh;

      #fight--bg {
        top: -12rem;
      }

      #fight--title {
        h2 {
          top: -1rem;
          margin-right: 3rem;
          font-size: 2.14rem;
        }

        img {
          height: 10rem;
        }
      }

      #fight--toyos {
        height: 5rem;
      }
    }
  }

  @media screen and (min-width: 2060px) {
    #fight--wrapper {
      top: 8rem;
      height: 110vh;
      max-height: 120vh;

      #fight--bg {
        top: -12rem;
      }

      #fight--title {
        height: 14rem;

        h2 {
          top: -1rem;
          margin-right: 4rem;
          font-size: 2.64rem;
        }

        img {
          height: 10rem;
        }
      }
    }

    .fight--toyo--concepts {
      .fight--toyo--concept {
        .fight--toyo--concept--info {
          top: -5rem;

          h2 {
            font-size: 4.84rem;
          }

          h3 {
            font-size: 2.24rem;
          }

          p {
            font-size: 1.86rem;
          }
        }
      }
    }
  }
`;

export { Body };
