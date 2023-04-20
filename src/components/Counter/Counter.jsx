import { React, useState } from "react";
import "./Counter.scss";
import Button from "../Button/Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(0);
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <h2 className="counter__number">{counter}</h2>
      <div className="counter__buttons">
        <Button onClick={handleDecrement} buttonText={"-"} isIncrease={false} />
        <Button onClick={handleIncrement} buttonText={"+"} isIncrease={true} />
      </div>
    </div>
  );
};

export default Counter;
