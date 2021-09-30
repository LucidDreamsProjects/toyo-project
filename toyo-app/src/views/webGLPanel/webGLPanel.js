import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import prand from "pure-rand";

export function WebGLPanel() {
  const [progression, setProgression] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(0);

  const unityContext = new UnityContext({
    loaderUrl: "../../unityBuild/BoxViewerTest1.loader.js",
    dataUrl: "../../unityBuild/BoxViewerTest1.data",
    frameworkUrl: "../../unityBuild/BoxViewerTest1.framework.js",
    codeUrl: "../../unityBuild/BoxViewerTest1.wasm",
    /* webglContextAttributes: {
      preserveDrawingBuffer: true,
    }, */
  });

  console.log(unityContext);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;

  for (let i = 0; i < 1000; i++) {
    const seed = getRandomInt(1000);
    const gen1 = prand.mersenne(seed);
    const [n, gen3] = prand.uniformIntDistribution(1, 5)(gen1);

    if (n === 1) {
      one++;
    } else if (n === 2) {
      two++;
    } else if (n === 3) {
      three++;
    } else {
      four++;
    }
  }

  console.log(one, two, three, four);

  function spawnBall() {
    console.group("BUTTON CLICKED");
    unityContext.send("inputControl", "bolaDoLucas", true);
  }

  useEffect(() => {
    unityContext.on("GameOver", (player) => {
      setIsGameOver(true);
      setWinner(player);
    });
  }, []);

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
  }, []);

  return (
    <div>
      <p>Loading {progression * 100} percent...</p>
      {isGameOver === true && <p>{`Game Over! ${winner} is the winner!`}</p>}
      <button onClick={spawnBall}>Spawn a ball!</button>
      <Unity unityContext={unityContext} />
    </div>
  );
}
