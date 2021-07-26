import { render, Component } from "preact";
import axios from "axios";

type HomeProps = {
  name: string;
  age: number;
  timer: number;
};

interface HomeState {
  name: string;
  age: number;
  timer: number;
}

class Home extends Component<HomeProps, HomeState> {
  constructor() {
    super();
    this.state = { name: "Lucas Cyrne", age: 25, timer: 0 };
  }

  getConnection() {
    console.log("⌛ requesting connection with venly...");
    axios({
      method: "get",
      url: "http://localhost:8080/",
      responseType: "json",
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getAuth() {
    console.log("⌛ requesting authentication on venly...");
    axios({
      method: "post",
      url: "http://localhost:8080/auth",
      responseType: "json",
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getConnection();
  }

  componentWillUnMount() {}

  render() {
    return (
      <div>
        <div>Toyo</div>
        <button type="button" onClick={this.getAuth}>
          VENLY AUTH
        </button>
      </div>
    );
  }
}

export default Home;
