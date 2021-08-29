import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-shrink: 1;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  max-width: 100%;
  overflow: hidden;
  background-color: hsla(350, 93%, 42%, 1);

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

const Canvas = styled.section`
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  padding: 4rem;
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
`;

export { Section, Canvas, Container, Column, Row };
