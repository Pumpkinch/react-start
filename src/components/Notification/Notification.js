import React from "react";
import "./styles.css";

const Notification = ({ text, logo }) => {
    return (
        <div className={["notification", color ? color : "blue"].join(" ")}>
            <img className="image" src={logo || "https://vailskibase.com/wp-content/uploads/2021/09/Salomon-logo.png"} />
            <p className="abzac">
                {text}
            </p>
        </div>
    )
}

export default Notification;
