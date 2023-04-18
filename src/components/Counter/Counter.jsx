import React from "react";
import "./Counter.scss";
import CountedNumber from "../CountedNumber/CountedNumber.jsx";
import Button from "../Button/Button";

const Counter = () => {
  return (
    <div className="counter">
      <h2>Counter</h2>
      <CountedNumber />
      <div className="counter__buttons">
        <Button buttonText={"-"} isIncrease={false} />
        <Button buttonText={"+"} isIncrease={true} />
      </div>
    </div>
  );
};

export default Counter;
