import { useLayoutEffect, useState } from "preact/hooks";

import useWindowSize from "../../hooks/useWindowSize";
import ConnectWidgetAPI from "../../services/init/init.services";
import getAuth from "../../services/users/getAuth";
import getProfile from "../../services/users/getProfile";
import checkAuthenticated from "../../services/users/checkAuthenticated";

import { Background, Section, Row, Column, Form, NeonButton } from "./styles";

export default function Home() {
  let [width, height] = useWindowSize();
  let [isLogged, setLogin] = useState(false);
  let [playerUI, setPlayerUI] = useState(1);
  let arkaneConnect;
  let userId;
  let profile;

  async function handleInit() {
    console.log(`👷 Welcome to Toyo's official webpage!`);

    arkaneConnect = await ConnectWidgetAPI();
    if (arkaneConnect !== undefined) {
      console.log(`👷 Device online and ready to go!`);
    }

    if (isLogged === false) {
      let result;
      console.log(`👷 Checking user credentials...`);
      result = await checkAuthenticated(arkaneConnect);
      setLogin(result.isAuthenticated);
    }

    console.log(`👷 User Successfully Logged In!`);

    userId = await getAuth(arkaneConnect);
    profile = await getProfile(arkaneConnect);
  }

  useLayoutEffect(() => {
    handleInit();
  }, []);

  return (
    <html>
      <body>
        <Background>
          <Section height={height}>
            <div id="logo">DROPDOWN MENU</div>
            <h1 id="title">Homepage 👽</h1>
            <NeonButton class="btn--login" onClick={handleInit}>
              LOGIN
            </NeonButton>
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
