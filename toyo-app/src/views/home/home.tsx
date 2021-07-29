import { Component } from "preact";
import axios from "axios";
import styled from "styled-components";

class Home extends Component {
  venlyLogin = async () => {
    axios({
      method: "GET",
      url: "http://localhost:8080/auth/login",
      responseType: "json",
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  venlyLogout = async () => {
    axios({
      method: "GET",
      url: "https://localhost:8080/auth/logou",
      responseType: "json",
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  venlyValidate = async () => {
    axios({
      method: "GET",
      url: "http://localhost:8080/auth/validate",
      responseType: "json",
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  venlyRefresh = async () => {
    axios({
      method: "GET",
      url: "http://localhost:8080/auth/refresh",
      responseType: "json",
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.venlyValidate();
  }

  componentWillUnMount() {}

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Toyo | Home</title>
        </head>
        <body>
          <Background>
            <Row width="100%" height="auto" class="space-between">
              <div id="logo">Toyo Game</div>
              <button
                id="btn--home"
                onClick={() => this.venlyLogin()}
                class="mr-1"
              >
                LOGIN
              </button>
            </Row>
            <h1 id="title">Homepage 👽</h1>
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
  justify-content: space-between;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
`;

export default Home;
