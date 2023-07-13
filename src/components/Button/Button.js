import React from "react";
import "./styles.css";
// color = blue, green, red
const Button = ({ buttonText, color, sizeBut }) => {
  return (
    <div className={["continue", color ? color : "blue", sizeBut ? sizeBut : "tiny-size"].join(" ")}>
      {buttonText}
    </div>
  )
}

export default Button;

