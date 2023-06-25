import React from "react";
import "./styles.css";

const WidgetButton = ({ smallIcon, butText }) => {
    return (
        <button className="WidgetButton" onClick={() => console.log("Ты нажал на кнопку " + butText)}>
            <img className="smallIcon" src={smallIcon}></img>
            <div className="butText">{butText}</div>
        </button>
    )
}

export default WidgetButton;