import React from "react";
import "./Counter.scss";
import CountedNumber from "../CountedNumber/CountedNumber.jsx";
import DecreaseButton from "../Button/DecreaseButton/DecreaseButton";
import IncreaseButton from "../Button/IncreaseButton/IncreaseButton";

const Counter = () => {
  return (
    <div className="counter">
      <h2>Counter</h2>
      <CountedNumber />
      <section className="counter__buttons">
        <DecreaseButton />
        <IncreaseButton />
      </section>
    </div>
  );
};

export default Counter;