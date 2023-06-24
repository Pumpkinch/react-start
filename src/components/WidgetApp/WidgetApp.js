import React from "react";
import "./styles.css";
import WidgetButton from "../WidgetButton";

const WidgetApp = ({ icon, heading, text, smallIcon, butText }) => {
    return (
        <div className={["WidgetApp"].join(" ")}>
            <div className="card">
                <img className="cardImg" src={icon}></img>
                <div className="cardText">
                    <h1 className="heading">{heading}</h1>
                    <p className="description">{text}</p>
                    <WidgetButton smallIcon={smallIcon} butText="для ANDROiD" />
                </div>
            </div>
        </div>
    )
}

export default WidgetApp;