import React, { useState } from "react";
import scissors from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import GameState from "./gameState";

const Game = () => {
  const [state, setState] = useState(false);
  const [pPick, setPick] = useState({});
  const [cPick, setCPick] = useState({});

  const handleClick = (e) => {
    setState(!state);
    const ele = e.target;
    setPlayerPicks(ele);
    cpuPicks();
    // console.log(pPick);
    // console.log(cPick);
    // let player = pPick.playerPicked;
    // let cpu = cPick.cpuPick;
    // result(player, cpu);
  };

  const cpuPicks = () => {
    const cpuPick = Math.round(Math.random() * 3);

    // console.log(cpuPick);
    // eslint-disable-next-line default-case
    switch (cpuPick) {
      case 1: {
        setCPick({ cpuPick: "paper", image: paper });
        break;
      }
      case 2: {
        setCPick({ cpuPick: "scissors", image: scissors });
        break;
      }
      default: {
        setCPick({ cpuPick: "rock", image: rock });
        break;
      }
    }
  };
  const setPlayerPicks = (ele) => {
    switch (ele.id) {
      case "1": {
        setPick({ playerPicked: "paper", image: paper });
        break;
      }
      case "2":
        setPick({ playerPicked: "scissors", image: scissors });
        break;
      default:
        setPick({ playerPicked: "rock", image: rock });
        break;
    }
  };

  return (
    <div>
      {state ? (
        <div>
          <GameState
            playerPick={pPick}
            computerPick={cPick}
            SetState={setState}
          />
        </div>
      ) : (
        <div className="container">
          <div onClick={handleClick}>
            <button className={state ? "btn-game-on" : "btn btn-paper"} id="1">
              <span id="1">
                <img src={paper} alt="paper" id="1" />
              </span>
            </button>
          </div>
          <button
            id="2"
            className={state ? "btn-game-on" : "btn btn-scissors"}
            onClick={handleClick}
          >
            <span id="2">
              <img id="2" src={scissors} alt="scissors" />
            </span>
          </button>
          <button
            id="3"
            className={state ? "btn-game-on" : "btn btn-rock"}
            onClick={handleClick}
          >
            <span id="3">
              <img id="3" src={rock} alt="rock" />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
