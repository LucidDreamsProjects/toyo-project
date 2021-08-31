import styled from "styled-components";

const Tile = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 1rem;

  label {
    color: #fff;
    font-weight: 800;
    font-size: 1rem;
    text-shadow: 0 0 0.25em hsl(0 0% 100% / 0.1), 0 0 0.15em currentColor;
  }

  div {
    margin-top: 0.75rem;
    color: #fff;
    font-size: 1.25rem;
    text-shadow: 0 0 0.5em hsl(0 0% 100% / 0.15), 0 0 0.25em #000;
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
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    text-shadow: 0.1em 0.1em #000;
  }

  img {
    margin-top: 1rem;
    width: 8rem;
  }
`;

export { Tile, ConstrainedTile, ImageTile };
