import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import "./CounterButton.scss";

const CounterButton = props => {
  const buttonBaby = props.action === "increment" ? <FaPlus /> : <FaMinus />;
  return (
    <button
      className="counter-button"
      onClick={props.onClick}
      action={props.action}
    >
      {buttonBaby}
    </button>
  );
};

export default CounterButton;
