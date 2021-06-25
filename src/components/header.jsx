import React, { useContext } from "react";
import { scoreContext } from "../scoreContext";

const Header = () => {
  const score = useContext(scoreContext);

  return (
    <header>
      <h1>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </h1>
      <div>
        <h4>SCORE</h4>
        <p>{score}</p>
      </div>
    </header>
  );
};

export default Header;
