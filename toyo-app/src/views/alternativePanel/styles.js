import styled from "styled-components";
import { Form } from "formik";

const Section = styled.section`
  display: flex;
  flex-shrink: 1;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  max-width: 100%;
  overflow: hidden;
  background-color: #fff;

  #transactions {
    display: flex;
    align-self: center;
    justify-self: center;
    align-items: center;
    justify-content: center;
    /* background-color: yellow; */
  }

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

const Body = styled(Section);

const Canvas = styled.section`
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  padding: 4rem;

  .form-contract {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    min-width: 50%;
    max-width: 75%;
    padding: 2rem;
    /* background-color: yellow; */

    form {
      position: relative;
      width: 100%;
      right: 1rem;

      div {
        display: flex;
      }

      #field-array {
        display: flex;
        flex-direction: column;

        div {
          display: flex;
          flex-direction: column;
        }

        button {
          min-width: 25%;
          max-width: 50%;
        }

        button:last-child {
          margin-top: 0.5rem;
        }
      }

      input {
        min-width: 60%;
        max-width: 100%;
        padding: 0.5rem;
        margin-top: 0.5rem;
      }

      button {
        padding: 0.5rem;
        border-radius: 8px;
        cursor: pointer;
      }

      #btn-submit {
        margin-top: 1rem;
        margin-left: 1rem;
      }
    }
  }

  .form-template {
    display: flex;
    flex-wrap: wrap;
    min-width: 50%;
    max-width: 75%;
    padding: 2rem;
    /* background-color: yellow; */

    form {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      right: 1rem;

      #field-array {
        display: flex;
        flex-direction: column;
        /* background-color: yellow; */

        div {
          display: flex;
          flex-direction: column;
        }

        button {
          cursor: pointer;
        }
      }

      input {
        min-width: 60%;
        max-width: 100%;
        padding: 0.5rem;
        margin-top: 0.5rem;
      }

      input[type="radio"] {
        position: relative;
        top: -1.3rem;
      }

      button {
        padding: 0.6rem;
        border-radius: 6px;
      }

      #btn-submit {
        width: 25%;
        margin-top: 1rem;
        margin-left: 1rem;
      }
    }
  }

  div.form-transfer {
    display: flex;
    flex-wrap: wrap;
    min-width: 100%;
    padding: 0;
    /* background-color: yellow; */

    form {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      /* background-color: yellow; */

      #btn-submit {
        margin: 0 auto;
        width: 50%;
      }
    }
  }

  div#mint-nft {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-items: center;
    padding: 2rem;
    width: 35%;
    height: auto;
    /* background-color: yellow; */

    div {
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: center;
      width: 100%;
      height: 50%;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  div#transfer-nft {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    width: 35%;
    height: auto;

    div {
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 50%;

      img {
        width: 100%;
        height: auto;
      }

      button {
        padding: 0.4rem;
        border-radius: 6px;
      }
    }
  }
`;

const Top = styled.section`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 100%;
  background: hsla(37, 82%, 50%, 0);

  #ply--balance {
    display: flex;
    align-self: right;
    margin-right: 5.5rem;
    color: #fff;
    font-weight: 700;
    font-size: 1.25rem;
    text-shadow: 0 0 1.25em hsl(0 0% 100% / 0.25), 0 0 0.5em currentColor;
  }

  #btn--login {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-end;

    button {
      display: inline-block;
      position: relative;
      margin-left: auto;
      margin-right: 0;
    }

    button:last-child {
      margin-top: 1rem;
    }
  }
`;

const Middle = styled.section`
  display: flex;
  width: 75%;
  max-width: 75%;
  /* background: hsla(37, 82%, 50%, 1); */
  margin-top: 6rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  width: 100%;
  height: auto;
  background: hsla(37, 82%, 50%, 0);

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const UserDisplay = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background: hsla(37, 82%, 50%, 0);
`;

const SimpleForm = styled.form`
  @media screen and (min-width: 765px) and (max-width: 1280px) {
    min-width: 20%;
    max-width: 30%;
  }

  @media screen and (min-width: 1px) and (max-width: 764px) {
    padding: 0;
    margin: 6rem 0 0 1.7rem;
    width: auto;
    min-width: 80%;
    max-width: 86%;
  }

  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  padding: 1rem;
  margin-left: 2.25%;
  margin-top: 7.5%;
  width: auto;
  max-width: 50%;
  min-width: 40%;
  border: 2px solid #fff;
  border-radius: 8px;

  div {
    display: flex;
    flex-direction: column;
    flex-shrink: 1;

    label {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      text-shadow: 1.5px 1.5px #000;
    }

    input {
      display: border-box;
      padding: 0 0.5rem;
      width: 100%;
      height: 1.75rem;
      border: none;
      border-radius: 4px;
      box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.5);
    }
  }
`;

const NftForm = styled(Form)``;

const Tile = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 1rem;

  label {
    color: #000;
    font-weight: 800;
    font-size: 0.8rem;
    text-shadow: 0 0 0.25em hsl(0 0% 100% / 0.1), 0 0 0.1em currentColor;
  }

  div {
    margin-top: 0.75rem;
    color: #000;
    font-size: 1rem;
    text-shadow: 0 0 0.5em hsl(0 0% 100% / 0.15), 0 0 0.1em #000;
  }
`;

const ConstrainedTile = styled(Tile)``;

const ImageTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 25%;
  height: 10rem;
  background: hsla(37, 82%, 50%, 0);
  cursor: pointer;

  div {
    color: #000;
    font-weight: 700;
    font-size: 1rem;
  }

  img {
    margin-top: 1rem;
    width: 8rem;
  }
`;

const NeonButton = styled.button`
  @media screen and (min-width: 1px) and (max-width: 420px) {
    margin: 0 auto;
    min-width: 62%;
    max-width: 75%;
    max-height: 15%;
  }

  display: inline-block;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 1em;
  margin: 0 auto;
  width: auto;
  min-width: 4rem;
  min-height: 2rem;
  font-size: 0.64rem;
  font-weight: 600;
  color: ${({ color }) => color};
  /* color: hsla(360, 100%, 100%, 1); */
  border: 0.15em solid currentColor;
  border-radius: 0.6em;
  background: none;
  cursor: pointer;
  letter-spacing: 1.5px;
  text-shadow: 0 0 2em hsl(0 0% 100% / 0.15), 0 0 0.075em currentColor;
  /* box-shadow: 0 0 1em 0 hsla(360, 100%, 100%, 1); */
  box-shadow: 0em 0em 0.25em 0 currentColor;

  :hover {
    box-shadow: 0em 0.25em 0.75em 0 currentColor;
  }
`;

export {
  Body,
  Canvas,
  Section,
  Top,
  Middle,
  Container,
  Column,
  Row,
  NftForm,
  SimpleForm,
  UserDisplay,
  Tile,
  ConstrainedTile,
  ImageTile,
  NeonButton,
};
