import React from "react";
import "./styles.css";

const WidgetButton = ({ smallIcon, butText }) => {
    return (
        <button className="WidgetButton">
            <img className="smallIcon" src={smallIcon}></img>
            <div className="butText">{butText}</div>
        </button>
    )
}

export default WidgetButton;