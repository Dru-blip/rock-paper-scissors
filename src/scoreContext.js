import React from "react";

const scoreContext = React.createContext();
const ScoreProvider = scoreContext.Provider;
const ScoreConsumer = scoreContext.Consumer;

export { scoreContext, ScoreProvider, ScoreConsumer };
