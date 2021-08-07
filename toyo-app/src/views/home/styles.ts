import styled from "styled-components";

const Background = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 0.125em;
`;

const Section = styled.section`
  @media screen and (min-width: 1px) and (max-width: 420px) {
    min-height: 200%;
  }

  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  background-color: hsl(323 21% 16%);

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
  }

  div {
    padding: 1rem;
  }

  #logo {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    position: relative;
    font-size: 0.8rem;
    text-shadow: 2px 2px 1px #000;
  }

  #title {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    align-self: left;
    position: relative;
    top: 5%;
    margin-left: 2rem;
    margin-bottom: 6rem;
    font-size: 2.441rem;
    text-shadow: 6px 6px 12px #000;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  justify-content: space-between;
`;

const Form = styled.form`
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

const NeonButton = styled.button`
  @media screen and (min-width: 1px) and (max-width: 420px) {
    margin: 0 auto;
    min-width: 62%;
    max-width: 75%;
    max-height: 15%;
  }

  display: inline-block;
  padding: 1.5em;
  margin: 1.6em;
  width: auto;
  max-width: 20%;
  max-height: 10%;
  font-size: 1rem;
  font-weight: 800;
  color: hsl(317 100% 54%);
  border: 0.25em solid currentColor;
  border-radius: 0.6em;
  background: none;
  cursor: pointer;

  text-shadow: 0 0 0.25em hsl(0 0% 100% / 0.5), 0 0 0.45em currentColor;

  box-shadow: 0 0 1em 0 hsl(317 100% 54%);
`;

export { Background, Section, Column, Row, Form, NeonButton };
