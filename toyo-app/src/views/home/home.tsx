import { render, Component } from "preact";
import { useContext } from "preact/hooks";
import { RouterContext, RouterLink } from "../../router";
import axios from "axios";
import styled from "styled-components";

class Home extends Component {
  componentDidMount() {}

  componentWillUnMount() {}

  render() {
    const { navigate } = useContext(RouterContext);

    return (
      <html>
        <head>
          <title>Toyo | Home</title>
          <meta charSet="utf-8" />
        </head>
        <body>
          <Background>
            <div id="logo">Toyo Game</div>
            <h1 id="title">Homepage 😌</h1>
            <a id="btn-google" href="http://localhost:8080/auth/google">
              GOOGLE AUTH
            </a>
          </Background>
        </body>
      </html>
    );
  }
}

const Background = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: hsl(261, 52%, 47%);
  color: #fff;
  font-size: 1.953rem;

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
    margin-top: calc(30vh - 100vh);
    margin-left: 1rem;
    margin-right: auto;
    font-size: 0.8rem;
    text-shadow: 2px 2px 1px #000;
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

  #btn-google {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    position: relative;
    top: 6rem;
    font-size: 1.563rem;
    text-shadow: 2px 2px 1px #000;
  }
`;

export default Home;
