import { FunctionalComponent } from "preact";
import { ArkaneConnect } from "@arkane-network/arkane-connect";
import { useEffect } from "react";
import { useWindowSize } from "../../domain/global/hooks/useWindowSize";
import { useState } from "preact/hooks";
import { Player } from "../../domain/player/interfaces/player";

interface HomeProps {
  arkaneConnect: ArkaneConnect;
}

export const Home: FunctionalComponent<HomeProps> = (props): JSX.Element => {
  let [width, height] = useWindowSize();
  let [player, setPlayer] = useState({} as Player);
  let [logged, isLogged] = useState(false);

  async function handleInit() {
    console.log(`👷 Welcome to Toyo's official webpage!`);

    if (props.arkaneConnect !== undefined) {
      console.log(`👷 Device online and ready to go!`);
    }

    console.log(`👷 isLogged: `, logged);
    console.log(`👷 actual player: `, player);
  }

  useEffect(() => {
    handleInit();
  }, []);

  return (
    
  )
};