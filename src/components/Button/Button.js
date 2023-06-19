import React from "react";
import "./styles.css";

const Button = ({ button, color, sizeBut }) => {
    return (
        <div className={["continue", color ? color : "blue", sizeBut ? sizeBut : "tiny-size"].join(" ")}>
            {button}
        </div>
    )
}

export default Button;

