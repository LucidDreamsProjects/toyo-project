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

  .green {
    color: #00ff8c;
  }

  .blue {
    color: #0077ff;
  }

  .purple {
    color: #b077ff;
  }

  .pink {
    color: #ff0000;
  }

  .orange {
    color: #ffb700;
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
    /* background: #000000; */
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
    max-width: 400px;
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
    /* background: yellow; */

    #top--metamask--btn {
      display: inline-flex;
      position: relative;
      order: 1;
      max-width: 31%;
      height: 3rem;
      max-height: 4rem;
      cursor: pointer;
      /* background: blue; */

      img {
        width: 100%;
        height: auto;
        max-width: 105%;
        max-height: 120%;
      }
    }

    #top--add--polygon {
      display: inline-flex;
      position: relative;
      order: 2;
      max-width: 31%;
      height: 3rem;
      max-height: 4rem;
      cursor: pointer;
      /* background: blue; */

      img {
        width: 100%;
        height: auto;
        max-width: 105%;
        max-height: 120%;
      }
    }

    #top--add--token {
      display: inline-flex;
      position: relative;
      order: 3;
      max-width: 31%;
      height: 3rem;
      max-height: 4rem;
      cursor: pointer;
      /* background: blue; */

      img {
        position: relative;
        top: -0.5rem;
        width: 105%;
        height: 125%;
        max-width: 105%;
        max-height: 120%;
      }
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

  @media screen and (orientation: landscape) {
    #top--wrapper {
      height: 100vh;
      min-height: 100vh;
      max-height: 100vh;
    }

    #top--bg {
      left: 0;
      width: 100%;
      z-index: 5;

      img {
        height: 125%;
        left: 0;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    #top--logo {
      top: 0rem;
      min-width: 35%;
      max-width: 45%;

      img {
        width: 100%;
      }
    }

    #top--title {
      top: -8rem;
    }

    #top--btns {
      top: -8rem;
      width: 56%;
    }
  }

  @media screen and (min-width: 1280px) {
    .canvas {
      min-width: 50vw;
      width: 65vw;
      height: auto;
    }

    #top--bg {
      top: 0;
      left: 0;
      width: 100%;
      height: auto;

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
      min-width: 65%;
      max-width: 75%;
    }

    #top--btns {
      top: -20rem;
      min-width: 75%;
      max-width: 75%;
      min-height: 6.5rem;
      max-height: 8rem;
      /* background: yellow; */

      #top--metamask--btn,
      #top--add--polygon,
      #top--add--token {
        width: 28%;
        height: 100%;

        img {
          width: 100%;
          height: auto;
        }
      }

      #top--add--token {
        img {
          height: 115%;
        }
      }
    }
  }

  @media screen and (min-width: 2060px) {
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
    top: -200vh;
    width: 100%;
    min-height: 500vh;
    max-height: 550vh;
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
    /* background: yellow; */
    z-index: 100;

    .drop--title {
      display: inline-flex;
      position: relative;
      width: 80%;
      font-size: 2.26rem;
      font-weight: 900;
      color: #fff;
    }

    .drop--supply {
      display: inline-flex;
      position: relative;
      top: 1.3rem;
      width: 20%;
      font-size: 0.94rem;
      /* font-style: italic; */
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
      justify-content: space-between;
      position: relative;
      margin: 0 auto;
      margin-top: 1rem;
      width: 84%;
      height: auto;
      /* background: purple; */

      .drop--mint--btn--less {
        display: inline-flex;
        width: 15%;
        cursor: pointer;

        img {
          width: 100%;
          height: auto;
        }
      }

      .drop--mint--btn--center {
        display: inline-flex;
        width: 60%;
        cursor: pointer;

        img {
          width: 100%;
          height: auto;
        }
      }

      .drop--mint--btn--more {
        display: inline-flex;
        width: 15%;
        cursor: pointer;

        img {
          width: 100%;
          height: auto;
        }
      }
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

  @media screen and (min-width: 1024px) {
    #drop--wrapper {
      flex-direction: column;
      top: -10rem;
      min-height: 150vh;
      height: 160vh;
      max-height: 170vh;
      /* background: yellow; */
    }

    #drop--bg {
      top: -75vh;
      min-height: 300vh;
      max-height: 320vh;
    }

    .drop--canvas {
      display: flex;
      flex-direction: row;
      align-self: center;
      justify-content: space-between;
      width: 75vw;
      height: auto;
    }

    .drop--token {
      margin: 0 auto;
      top: 10rem;
      width: 34%;
      height: 40rem;
      min-height: 40rem;
      max-height: 54rem;
      /* background: #000; */

      .drop--unity {
        width: 100%;
        height: 20rem;
        margin-top: -10rem;
        min-height: 20rem;
        max-height: 20rem;
      }

      .drop--title {
        top: 0;
        left: 0;
        width: 100%;
        font-size: 1.64rem;
      }

      .drop--supply {
        top: 0.25rem;
        width: 100%;
        font-size: 1.12rem;
      }

      .drop--info {
        left: 0;
        right: 0;
        margin: 1rem auto;
        margin-right: auto;
        margin-left: 0;
        font-size: 1rem;
      }

      .drop--price {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        padding-left: 3rem;
        padding-right: 1rem;
        margin: 0 auto;
        width: 100%;
        height: 4rem;
      }

      .drop--price--matic {
        align-items: center;
        align-self: flex-end;
        top: 0.5rem;
        width: 48%;
        height: auto;

        img {
          display: inline-flex;
          position: relative;
          top: 0.1rem;
          width: 80%;
          height: auto;
        }

        h3 {
          margin-left: 0.25rem;
          font-size: 2rem;
          font-weight: 800;
        }
      }

      .drop--price--dollar {
        display: inline-flex;
        align-self: flex-end;
        /* margin-top: 1rem; */
        margin-left: auto;
        margin-right: 0;
        width: 48%;
        /* background: blue; */

        h3 {
          font-size: 1rem;
        }
      }

      .drop--rarity {
        width: 54%;
        margin: 0;
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: auto;
        margin-bottom: 1rem;
        color: #fff;

        .drop--rarity--right {
          position: relative;
          left: 4.6rem;
        }

        tr > td {
          margin: 0.25rem 0;
        }
      }
    }

    #drop--recaptcha {
      display: inline-flex;
      position: relative;
      margin: 0 auto;
      top: 17rem;
      width: 25%;
      height: 6rem;
      background: green;
      z-index: 200;
    }
  }

  @media screen and (min-width: 1280px) {
    .flex {
      flex-direction: row;
    }

    #drop--wrapper {
      top: -4rem;
      height: 210vh;
      max-height: 210vh;
      /* background: green; */

      #drop--bg {
        top: -86vh;
        min-height: 355vh;
        max-height: 365vh;
      }
    }
  }

  @media screen and (min-width: 1366px) {
    #drop--wrapper {
      top: 8rem;
      height: 240vh;
      max-height: 240vh;
      /* background: blue; */

      #drop--bg {
        top: -70vh;
        min-height: 150%;
        max-height: 160%;
      }

      .drop--token {
        height: 46rem;

        .drop--unity {
          min-height: 24rem;
          max-height: 38rem;
        }

        .drop--price {
          .drop--price--dollar {
            position: relative;
            left: 2.15rem;
          }
        }

        .drop--mint--counter {
          left: -0.8rem;
        }

        .drop--rarity {
          top: 0;
          width: 50%;

          .drop--rarity--right {
            position: relative;
            left: 7rem;
          }
        }
      }

      #drop--recaptcha {
        top: 14rem;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    #drop--wrapper {
      min-height: 170vh;
      height: 170vh;
      max-height: 190vh;
      /* background: blue; */

      #drop--bg {
        top: -76vh;
        min-height: 160%;
        max-height: 180%;
      }

      .drop--token {
        top: 0rem;
        /* background: yellow; */

        .drop--unity {
          min-height: 28rem;
          max-height: 34rem;
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

      #drop--recaptcha {
        top: 10rem;
      }
    }
  }

  @media screen and (min-width: 1920px) {
    #drop--wrapper {
      min-height: 210vh;
      height: 210vh;
      max-height: 230vh;
      /* background: blue; */

      #drop--bg {
        top: -76vh;
        min-height: 165%;
        max-height: 185%;
      }

      .drop--token {
        top: 10rem;
        height: 64rem;
        min-height: 64rem;
        max-height: 68rem;
        /* background: yellow; */

        .drop--unity {
          min-height: 32rem;
          max-height: 36rem;
        }

        .drop--title {
          font-size: 2.76rem;
        }

        .drop--supply {
          font-size: 1.36rem;
        }

        .drop--info {
          font-size: 1.14rem;
        }

        .drop--price {
          padding-left: 0;
          padding-right: 0;
        }

        .drop--price--matic {
          position: relative;
          left: 7rem;
          width: 36%;

          h3 {
            font-weight: 800;
          }
        }

        .drop--price--dollar {
          width: 38%;
          /* background: blue; */

          h3 {
            position: relative;
            top: 0.25rem;
            right: 6rem;
            font-size: 1.46rem;
          }
        }

        .drop--rarity {
          width: 46%;
          margin: 0;
          margin-top: 1rem;
          margin-left: 1.5rem;
          margin-right: auto;
          margin-bottom: 1rem;
          color: #fff;

          .drop--rarity--right {
            position: relative;
            left: 11rem;
          }

          tr > td {
            margin: 0.25rem 0;
            font-size: 1.36rem;
            font-weight: 700;
          }
        }
      }

      #drop--recaptcha {
        top: 16rem;
        height: 8rem;
      }
    }
  }

  @media screen and (min-width: 2060px) {
    #drop--wrapper {
      min-height: 110vh;
      height: 110vh;
      max-height: 120vh;
      /* background: yellow; */

      #drop--bg {
        top: -80vh;
        min-height: 240%;
        max-height: 250%;

        img {
          min-height: 175%;
          max-height: 185%;
        }
      }

      .drop--token {
        top: -10rem;

        height: 74rem;
        min-height: 74rem;
        max-height: 80rem;
        /* background: yellow; */

        .drop--unity {
          min-height: 40rem;
          max-height: 46rem;
        }

        .drop--title {
          font-size: 3.26rem;
        }

        .drop--supply {
          font-size: 1.84rem;
        }

        .drop--info {
          font-size: 1.56rem;
        }

        .drop--price--matic {
          position: relative;
          left: 6rem;
          width: 36%;

          img {
            width: 100%;
          }

          h3 {
            position: relative;
            font-size: 2.46rem;
            font-weight: 800;
            left: 0.8rem;
          }
        }

        .drop--price--dollar {
          width: 38%;
          /* background: blue; */

          h3 {
            position: relative;
            top: 0.25rem;
            right: 6rem;
            font-size: 1.68rem;
          }
        }

        .drop--rarity {
          width: 52%;
          margin-top: 1.5rem;
          color: #fff;

          .drop--rarity--right {
            position: relative;
            left: 11rem;
          }

          tr > td {
            font-size: 1.64rem;
            font-weight: 700;
          }
        }
      }

      #drop--recaptcha {
        top: 0;
        height: 10rem;
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
    /* background: blue; */

    img {
      width: 100%;
      height: auto;
    }
  }

  #story--landscape {
    display: inline-flex;
    position: relative;
    margin: 0 auto;
    margin-top: 1.5rem;
    width: 90%;
    height: 12rem;
    /* background: #c9c9c9; */

    img {
      width: 100%;
      height: auto;
    }
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
      background: #a0a0a0;
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
    /* background: blue; */
    z-index: 200;

    img {
      width: 100%;
      height: auto;
    }
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

  @media screen and (min-width: 1024px) {
    .canvas--right {
      display: flex;
      width: 65vw;
      margin-left: auto;
      margin-right: -2rem;
    }

    #story--wrapper {
      margin-top: -14rem;
      height: 100vh;
      min-height: 135vh;
      max-height: 145vh;
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
      width: 54%;
      top: -36.5rem;
      right: 31rem;
      font-size: 1rem;
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
      margin-top: -18rem;
      height: 100vh;
      min-height: 120vh;
      max-height: 120vh;
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
      margin-left: 7.7rem;
    }

    #story--toyo--img {
      top: -12rem;
      right: 10rem;
      width: 14rem;
      height: 22rem;
    }

    #story--toyo--paragraph {
      width: 58%;
      top: -38rem;
      right: 37rem;
    }
  }

  @media screen and (min-width: 1366px) {
    #story--wrapper {
      margin-top: 4rem;
      min-height: 130vh;
      max-height: 140vh;
    }

    #story--slots {
      margin-left: 8.3rem;
    }

    #story--toyo--paragraph {
      top: -41.5rem;
      right: 40rem;
      width: 58%;
    }
  }

  @media screen and (min-width: 1440px) {
    #story--wrapper {
      margin-top: -4rem;
      min-height: 130vh;
      max-height: 140vh;
    }

    #story--landscape {
      height: 22rem;
    }

    #story--toyo--img {
      top: -14rem;
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
      margin-top: 8rem;
      min-height: 140vh;
      max-height: 150vh;
      /* background: green; */
    }

    #story--title {
      height: 10rem;
    }

    #story--landscape {
      height: 28rem;
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
      margin-top: 24rem;
      min-height: 90vh;
      max-height: 100vh;
      /* background: blue; */

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
        top: -46rem;
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
    height: 100%;
    /* background: #c9c9c9; */

    img {
      width: 100%;
      height: auto;
    }
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
      /* background: blue; */
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
    /* background: yellow; */
    z-index: 100;

    #fight--toyos--image {
      display: inline-block;
      width: 10%;
      height: 100%;
      cursor: pointer;
      /* background: blue; */

      img {
        width: 100%;
        height: auto;
      }
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
      /* background: lightblue; */

      .fight--toyo--concept--image {
        display: inline-flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 90%;
        /* background: green; */

        img {
          max-width: 75%;
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

  @media screen and (min-width: 1024px) {
    #fight--wrapper {
      margin: 0;
      top: 4rem;
      height: 110vh;
      max-height: 110vh;
      /* background: yellow; */
    }

    #fight--bg {
      height: 108%;
    }

    #fight--title {
      width: 60%;
      margin-left: auto;
      margin-right: 7.8rem;

      h2 {
        position: relative;
        top: -0.5rem;
        margin-right: 1.4rem;
      }
    }

    #fight--toyos {
      margin-top: 4rem;
      width: 65%;
      height: 3.8rem;
    }

    .fight--toyo--concepts {
      .fight--toyo--concept {
        width: 65%;

        .fight--toyo--concept--info {
          position: relative;
          top: -1.5rem;
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

  @media screen and (min-width: 1280px) {
    #fight--wrapper {
      margin: 0;
      top: 4rem;
      height: 110vh;
      max-height: 110vh;
      /* background: yellow; */
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
    #fight--wrapper {
      margin-top: 10rem;
      height: 150vh;
      min-height: 150vh;
      max-height: 150vh;
    }

    #fight--bg {
      top: -70vh;
      height: 100%;

      img {
        position: relative;
        /* top: -45vh; */
        left: 0;
        width: 100%;
        height: 140%;
      }
    }

    #fight--title {
      margin-top: 6rem;
      width: 65%;
      margin-right: -3.6rem;

      img {
        height: auto;
      }
    }

    .fight--toyo--concepts {
      margin-top: 0.5rem;
      min-height: 60vh;

      .fight--toyo--concept {
        height: 100%;

        .fight--toyo--concept--info {
          top: -4rem;

          h2 {
            font-size: 3.86rem;
          }

          h3 {
            font-size: 1.86rem;
          }

          p {
            font-size: 1.24rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    #fight--wrapper {
      margin-top: 10rem;
      height: 130vh;
      min-height: 130vh;
      max-height: 150vh;
    }

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
      margin: 0;
      height: 185vh;
      max-height: 200vh;
      /* background: blue; */

      #fight--bg {
        top: -60vh;
      }

      #fight--title {
        margin-top: 22rem;

        h2 {
          margin-right: 3rem;
          font-size: 2.14rem;
        }

        img {
          min-height: 50%;
          max-height: 75%;
        }
      }

      #fight--toyos {
        top: 4rem;
        height: 5rem;
      }

      .fight--toyo--concepts {
        top: 8rem;

        .fight--toyo--concept {
          background: lightblue;

          .fight--toyo--concept--image {
            img {
              background: green;
              max-height: 100%;
            }
          }

          .fight--toyo--concept--info {
            top: -9rem;

            h2 {
              font-size: 3.84rem;
            }

            h3 {
              font-size: 2rem;
            }

            p {
              font-size: 1.46rem;
              line-height: 1.9rem;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 2060px) {
    #fight--wrapper {
      height: 150vh;
      max-height: 160vh;
      /* background: yellow; */

      #fight--bg {
        top: -52rem;
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

      #fight--toyos {
        width: 80%;
        height: 6.5rem;
      }

      .fight--toyo--concepts {
        .fight--toyo--concept {
          .fight--toyo--concept--info {
            top: -8rem;

            h2 {
              font-size: 4.84rem;
            }

            h3 {
              font-size: 2.24rem;
            }

            p {
              font-size: 1.86rem;
              line-height: 2.86rem;
            }
          }
        }
      }
    }
  }
`;

export { Body };
