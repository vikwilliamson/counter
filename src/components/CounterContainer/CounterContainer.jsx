import React, { useState } from "react";

import CounterButton from "../CounterButton/CounterButton";

import "./CounterContainer.scss";

const CounterContainer = () => {
  const [count, setCounter] = useState(0);
  const increment = () => setCounter(count + 1);
  const decrement = () => setCounter(count - 1);

  return (
    <div className="counter-container">
      <h1>Counter Container</h1>
      <div className="scoreboard">
        <h2>{count}</h2>
      </div>
      <CounterButton onClick={increment} action="increment" />
      <CounterButton onClick={decrement} action="decrement" />
    </div>
  );
};

export default CounterContainer;
