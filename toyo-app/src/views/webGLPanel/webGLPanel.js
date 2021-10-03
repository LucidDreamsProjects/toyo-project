import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import prand from "pure-rand";

const unityContextA = new UnityContext({
  loaderUrl: "./BoxViewer1/Build/BoxViewer1.loader.js",
  dataUrl: "./BoxViewer1/Build/BoxViewer1.data",
  frameworkUrl: "./BoxViewer1/Build/BoxViewer1.framework.js",
  codeUrl: "./BoxViewer1/Build/BoxViewer1.wasm",
  webglContextAttributes: {
    preserveDrawingBuffer: true,
  },
});

const unityContextB = new UnityContext({
  loaderUrl: "./BoxViewer2/Build/BoxViewer2.loader.js",
  dataUrl: "./BoxViewer2/Build/BoxViewer2.data",
  frameworkUrl: "./BoxViewer2/Build/BoxViewer2.framework.js",
  codeUrl: "./BoxViewer2/Build/BoxViewer2.wasm",
  webglContextAttributes: {
    preserveDrawingBuffer: true,
  },
});

export function WebGLPanel() {
  const [progressionA, setProgressionA] = useState(0);
  const [progressionB, setProgressionB] = useState(0);

  console.log(unityContextA);
  console.log(unityContextB);

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
    unityContextA.send("InputControl", "trocaLucas");
  }

  function switchSparks() {
    unityContextB.send("InputControl", "sparksSwitch");
  }

  function switchBeams() {
    unityContextB.send("InputControl", "beamsSwitch");
  }

  function switchPorks() {
    unityContextB.send("InputControl", "porksSwitch");
  }

  function switchHeart() {
    unityContextB.send("InputControl", "heartSwitch");
  }

  /* useEffect(() => {
    unityContext.on("GameOver", (player) => {
      setIsGameOver(true);
      setWinner(player);
    });
  }, []); */

  useEffect(function () {
    unityContextA.on("progress", function (progression) {
      setProgressionA(progression);
    });
  }, []);

  useEffect(function () {
    unityContextB.on("progress", function (progression) {
      setProgressionB(progression);
    });
  }, []);

  return (
    <div>
      <div>
        <div>BOX HIGH CONFIG</div>
        <p>Loading {progressionA * 100} percent...</p>
        {/* {isGameOver === true && <p>{`Game Over! ${winner} is the winner!`}</p>} */}
        <button onClick={spawnBall}>Spawn a ball!</button>
        {/* <Unity
          unityContext={unityContextA}
          style={{
            position: "relative",
            marginLeft: "2rem",
            width: "262px",
            height: "375px",
          }}
        /> */}
      </div>
      <div>
        <div>BOX LOW CONFIG</div>
        <p>Loading {progressionB * 100} percent...</p>
        {/* {isGameOver === true && <p>{`Game Over! ${winner} is the winner!`}</p>} */}
        <button onClick={switchSparks}>Switch sparks!</button>
        <button onClick={switchBeams}>Switch beams!</button>
        <button onClick={switchPorks}>Switch porks!</button>
        <button onClick={switchHeart}>Switch hearts!</button>
        <Unity
          unityContext={unityContextB}
          style={{
            position: "relative",
            marginLeft: "2rem",
            width: "400px",
            height: "600px",
          }}
        />
      </div>
    </div>
  );
}
