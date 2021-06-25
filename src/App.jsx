import "./styles/App.scss";
import React from "react";
import Game from "./components/game";
import Rules from "./components/rules";
import Header from "./components/header";
import { ScoreProvider } from "./scoreContext.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
    this.setScore = this.setScore.bind(this);
  }

  setScore(score) {
    this.setState({ score: score });
  }

  render() {
    return (
      <ScoreProvider value={[this.state.score, this.setScore]}>
        <div>
          <div className="header">
            <Header />
          </div>
          <div className="game">
            <Game />
          </div>
          <Rules />
        </div>
      </ScoreProvider>
    );
  }
}

export default App;
