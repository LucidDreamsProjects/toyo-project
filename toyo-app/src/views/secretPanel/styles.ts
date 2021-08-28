import styled from "styled-components";

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
    align-self: right;
  }
`;

const Middle = styled.section`
  display: flex;
  width: 75%;
  max-width: 75%;
  background: hsla(37, 82%, 50%, 0);
  margin-top: 6rem;
`;

const UserDisplay = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background: hsla(37, 82%, 50%, 0);
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
  font-size: 0.72rem;
  font-weight: 600;
  /* color: hsla(0, 0%, 0%, 1); */
  color: hsla(360, 100%, 100%, 1);
  border: 0.15em solid currentColor;
  border-radius: 0.6em;
  background: none;
  cursor: pointer;
  text-shadow: 0 0 2em hsl(0 0% 100% / 0.25), 0 0 0.75em currentColor;
  /* box-shadow: 0 0 1em 0 hsla(360, 100%, 100%, 1); */
  box-shadow: 0em 0em 0.5em 0 hsla(0, 0%, 0%, 1);

  :hover {
    box-shadow: 0em 0.25em 0.75em 0 hsla(0, 0%, 0%, 1);
  }
`;

export { Top, Middle, UserDisplay, NeonButton };
