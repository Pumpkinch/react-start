import React from "react";
import "./styles.css";
import eyeOpen from "./eyeOpen.svg";
import eyeClose from "./eyeClose.svg";

// type = default, error, success
const Input = ({ subText, type, underText, isHide, afterIconAction, afterIcon, onChange }) => {
    const handleChange = (event) => {
        onChange && onChange(event);
    }

    return (
        <div>
            <p className="underText">
                {underText}
            </p>
            <div className="entry">
                <input onChange={handleChange} className={["inputPass", type === 'error' && 'error-input'].join(' ')}></input>
                <button className={["eye"].join(' ')} onClick={afterIconAction}>
                    <img src={isHide ? eyeClose : eyeOpen} alt="img" />
                </button>
            </div>
            <p className={['subText', type === 'success' && 'success', type === 'error' && 'error-text'].join(" ")}>
                {subText}
            </p>
        </div>
    )
}

export default Input;