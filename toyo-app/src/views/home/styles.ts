import styled from "styled-components";

const Background = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: hsl(261, 52%, 47%);
  color: #fff;
  font-size: 1.953rem;
`;

const Section = styled.section`
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

  #btn--home {
    @media screen and (min-width: 320px) and (max-width: 420px) {
      right: 10%;
    }

    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    position: relative;
    right: 2.5%;
    color: #fff;
    font-size: 0.8rem;
    text-shadow: 2px 2px 1px #000;
    background: none;
    border: none;
    cursor: pointer;
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

const Form = styled.form`
  @media screen and (min-width: 320px) and (max-width: 420px) {
    padding: 0;
    margin: 6rem 0 0 1.7rem;
    width: 80%;
  }

  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  padding: 1rem;
  margin-left: 2.25%;
  margin-top: 7.5%;
  width: 20%;
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

export { Background, Section, Row, Form };
