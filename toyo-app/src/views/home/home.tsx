import { useState } from "preact/hooks";
import { BrowserView, MobileView } from "react-device-detect";

import useWindowSize from "../../hooks/useWindowSize";
import ConnectWidgetAPI from "../../services/init/init.services";

import { Background, Section, Row, Column, Form, Button } from "./styles";

export default function Home() {
  let [width, height] = useWindowSize();
  let [isLogged, Login] = useState(false);
  let [playerUI, setPlayerUI] = useState(1);
  let userId;

  console.log(`👷 Welcome to Toyo's official webpage!`);

  const handleInit = () => {
    userId = ConnectWidgetAPI();
    console.log(`👷 User Successfully Logged In!`);
    Login(true);
  };

  return (
    <html>
      <body>
        <Background>
          <Section height={height}>
            <div id="logo">DROPDOWN MENU</div>
            <Button class="btn--login" onClick={handleInit}>
              LOGIN
            </Button>
            <h1 id="title">Homepage 👽</h1>
            <Form action="" method="post">
              <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
              </div>
              <div>
                <label htmlFor="firstName">Name</label>
                <input id="firstName" type="text" />
              </div>
              <div>
                <label htmlFor="lastName">Surname</label>
                <input id="lastName" type="text" />
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input id="address" type="text" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" />
              </div>
              <div>
                <label htmlFor="icon">Icon</label>
                <input id="icon" type="number" />
              </div>
            </Form>
          </Section>
        </Background>
      </body>
    </html>
  );
}
