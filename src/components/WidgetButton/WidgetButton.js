import React from "react";
import "./styles.css";

const WidgetButton = ({ smallIcon, butText }) => {
    return (
        <div className={["WidgetButton"].join(" ")}>
            <div className="button">
                <img className="smallIcon" src={smallIcon}></img>
                <div className="butText">{butText}</div>
            </div>
        </div>
    )
}

export default WidgetButton;