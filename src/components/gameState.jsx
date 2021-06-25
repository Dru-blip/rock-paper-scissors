import React from "react";
import { scoreContext } from "../scoreContext";

class GameState extends React.Component {
  static contextType = scoreContext;
  constructor(props) {
    super(props);
    this.state = {
      winner: "",
      matchResult: "",
      // eslint-disable-next-line no-useless-concat
      playerBtnStyle: "btn " + "btn-" + props.playerPick.playerPicked,
      // eslint-disable-next-line no-useless-concat
      cpuBtnStyle: "btn " + "btn-" + props.computerPick.cpuPick,
    };
    this.playAgain = this.playAgain.bind(this);
    this.result = this.result.bind(this);
  }

  componentDidMount() {
    const context = this.context;
    console.log(context[0]);
    this.result(
      this.props.playerPick.playerPicked,
      this.props.computerPick.cpuPick,
      context[0],
      context[1]
    );
  }

  playAgain() {
    this.props.SetState(false);
  }

  result(playerPicked, cpuPick, score, setScore) {
    if (playerPicked === cpuPick) {
      this.setState({ matchResult: "DRAW" });
    } else if (playerPicked === "rock") {
      if (cpuPick === "paper") {
        this.setState({ winner: cpuPick });
        this.setState({ matchResult: "YOU LOSE" });
        setScore(score - 1);
      } else {
        this.setState({ winner: playerPicked });
        this.setState({ matchResult: "YOU WIN" });
        // setScore(score + 1);
        setScore(score + 1);
      }
    } else if (playerPicked === "paper") {
      if (cpuPick === "scissors") {
        this.setState({ winner: cpuPick });
        this.setState({ matchResult: "YOU LOSE" });
        setScore(score - 1);
      } else {
        this.setState({ winner: playerPicked });
        this.setState({ matchResult: "YOU WIN" });
        setScore(score + 1);
      }
    } else if (playerPicked === "scissors") {
      if (cpuPick === "rock") {
        this.setState({ winner: cpuPick });
        this.setState({ matchResult: "YOU LOSE" });
        setScore(score - 1);
      } else {
        this.setState({ winner: playerPicked });
        this.setState({ matchResult: "YOU WIN" });
        setScore(score + 1);
      }
    }
  }

  render() {
    return (
      <div>
        <div className="state-container">
          <div className="picks winner">
            <p>YOU PICKED</p>
            <button className={this.state.playerBtnStyle}>
              <span>
                <img
                  src={this.props.playerPick.image}
                  alt={this.props.playerPick.playerPicked}
                />
              </span>
            </button>
          </div>
          <div className="go-down">
            <div className="result">
              <p>{this.state.matchResult}</p>
              <button onClick={this.playAgain}>Play Again</button>
            </div>
          </div>

          <div className="picks">
            <p>THE HOUSE PICKED</p>
            <button className={this.state.cpuBtnStyle}>
              <span>
                <img
                  src={this.props.computerPick.image}
                  alt={this.props.computerPick.cpuPick}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GameState;
/*
const GameState = ({ playerPick, computerPick, SetState }) => {
  // console.log(playerPick);
  // console.log(computerPick);
  const [winner, setWinner] = useState("");
  const [matchResult, setMatchResult] = useState("");
  // eslint-disable-next-line no-useless-concat
  const playerBtnStyle = "btn " + "btn-" + playerPick.playerPicked;
  // eslint-disable-next-line no-useless-concat
  const cpuBtnStyle = "btn " + "btn-" + computerPick.cpuPick;
  // console.log(playerBtnStyle);
  // console.log(cpuBtnStyle);
  // console.log(playerPick.playerPicked);
  // console.log(computerPick.cpuPick);

  const playAgain = () => {
    SetState(false);
  };
  const result = (playerPicked, cpuPick) => {
    if (playerPicked === "rock") {
      if (cpuPick === "paper") {
        setWinner(cpuPick);
        return "YOU LOSE";
        setMatchResult("YOU LOSE");
      } else {
        setWinner(playerPicked);
        return "YOU WIN";
        // setMatchResult("YOU WIN");
      }
    } else if (playerPicked === "paper") {
      if (cpuPick === "scissors") {
        setWinner(cpuPick);
        return "YOU LOSE";
        // setMatchResult("YOU LOSE");
      } else {
        setWinner(playerPicked);
        return "YOU WIN";
        // setMatchResult("YOU WIN");
      }
    } else if (playerPicked === "scissors") {
      if (cpuPick === "rock") {
        setWinner(cpuPick);
        return "YOU LOSE";
        // setMatchResult("YOU LOSE");
      } else {
        setWinner(playerPicked);
        return "YOU WIN";
      }
    }
  };

  return (
    <div>
      <div className="state-container">
        <div className="picks">
          <p>YOU PICKED</p>
          <button className={playerBtnStyle}>
            <span>
              <img src={playerPick.image} alt={playerPick.playerPicked} />
            </span>
          </button>
        </div>
        <div className="result">
          {playerPick.playerPicked === computerPick.cpuPick ? (
            <p>DRAW</p>
          ) : (
            <p>
              {
              setTimeout(() => {
                result(playerPick.playerPicked, computerPick.cpuPick);
              }, 200)}
            </p>
          )}

          <button onClick={playAgain}>Play Again</button>
        </div>
        <div className="picks">
          <p>THE HOUSE PICKED</p>
          <button className={cpuBtnStyle}>
            <span>
              <img src={computerPick.image} alt={computerPick.cpuPick} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};*/
