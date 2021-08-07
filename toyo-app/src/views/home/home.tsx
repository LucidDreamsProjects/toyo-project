import { useState } from "preact/hooks";
import { Background, Section, Row, Form } from "./styles";
import ConnectWidgetAPI from "../../services/init/init.services";

export default function Home() {
  let [isLogged, Login] = useState(false);
  let [playerUI, setPlayerUI] = useState(1);
  let userId;

  const handleInit = () => {
    userId = ConnectWidgetAPI();
  };

  return (
    <html>
      <body>
        <Background>
          <Section height="200%">
            <Row width="100%" height="auto">
              <div id="logo">DROPDOWN MENU</div>
              <button class="btn btn--home" onClick={() => {}}>
                LOGIN
              </button>
            </Row>
            <h1 id="title">Homepage 👽</h1>
            <Row>
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
              <button
                id="btn--api"
                class="btn btn--api--connect"
                onClick={handleInit}
              >
                CONNECT WIDGET API
              </button>
            </Row>
          </Section>
        </Background>
      </body>
    </html>
  );
}
