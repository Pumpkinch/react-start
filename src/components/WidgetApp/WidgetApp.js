import React from "react";
import "./styles.css";
import WidgetButton from "../WidgetButton";

const WidgetApp = ({ data, name, icon, heading, text }) => {
    let buttons = [];
    if (name === 'atiLoads') {
        console.log("atiLoads");
        buttons = [
            data.android,
            data.ios,
            data.huawei,
            data.rustore,
        ]
    } else if (name === 'atiDriver') {
        buttons = [
            data.android,
            data.rustore,
        ]
    } else {
        buttons = [
            data.windows
        ]
    }

    console.log("data", data)

    return (
        <div className={["WidgetApp"].join(" ")}>
            <div className="card">
                <img className="cardImg" src={icon}></img>
                <div className="cardText">
                    <h1 className="heading">{heading}</h1>
                    <p className="description">{text}</p>
                    <div className="buttons">

                        {buttons.map((button) => {
                            console.log("button", button);
                            return <WidgetButton smallIcon={button.logo} butText={button.text}/>
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WidgetApp;