import styled from "styled-components";

const Background = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 1.953rem;
  background-color: hsl(261, 52%, 47%);
`;

const Section = styled.section`
  @media screen and (min-width: 320px) and (max-width: 420px) {
    min-height: "200%";
  }

  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  background-color: hsl(261, 52%, 47%);

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
    align-self: center;
    position: relative;
    top: 5%;
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

  @media screen and (min-width: 320px) and (max-width: 764px) {
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
  min-width: 28%;
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

const Button = styled.button`
  @media screen and (min-width: 320px) and (max-width: 420px) {
    margin: 0 auto;
    min-width: 62%;
    max-width: 75%;
    max-height: 15%;
  }

  display: inline-flex;
  position: relative;
  align-items: center;
  vertical-align: center;
  padding: 1rem;
  margin: 2.25rem;
  width: auto;
  max-width: 16%;
  max-height: 8%;
  box-shadow: 2px 6px;
  font-weight: 700;
  border: 2px solid hsl(261, 52%, 56%);
  border-radius: 8px;
  background: none;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: hsl(261, 52%, 48%);
    border: 2px solid hsl(261, 52%, 52%);
    box-shadow: none;
    color: #fff;
  }
`;

export { Background, Section, Column, Row, Form, Button };
