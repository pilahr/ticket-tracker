import React from "react";
import "./Button.scss";

const Button = (props) => {
  let buttonStyle = "button";

  if (props.isIncrease) {
    buttonStyle += " increase";
  } else {
    buttonStyle += " decrease";
  }

  return <button onClick={props.onClick} className={buttonStyle}>{props.buttonText}</button>;
};

export default Button;
