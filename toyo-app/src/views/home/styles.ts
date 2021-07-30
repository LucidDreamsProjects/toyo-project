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

  .space-between {
    justify-content: space-between;
  }

  .mr-1 {
    margin-right: 1rem;
  }

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
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    position: relative;
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
    position: relative;
    top: 3rem;
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
`;

export { Background, Row };
