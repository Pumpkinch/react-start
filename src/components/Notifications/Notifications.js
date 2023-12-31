import React from "react";
import "./styles.css";
import Button from "../Button/Button";

const Notifications = ({buttonText, text, color, sizeBut}) => {
  return (
    <div className="notifications">
      <div className="action">
        <p className="abzac">
          {text}
        </p>
        <img className="close" src="https://cdn.onlinewebfonts.com/svg/download_29332.png" />
      </div>
      <Button buttonText= {buttonText} color={color} sizeBut={sizeBut}/>
           
    </div>
        
  )
}


export default Notifications;