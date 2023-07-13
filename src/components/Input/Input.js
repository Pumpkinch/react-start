import React from "react";
import { useState } from 'react';
import "./styles.css";
import eyeOpen from "../../eyeOpen.svg";
import eyeClose from "../../eyeClose.svg";

// type = default, error, success
const Input = ({ underText, value, subText, type, success, error, afterIcon, isHide, afterIconAction, onChange }) => {
const handleChange = (event) => {
    onChange && onChange(event);
}

    return (
        <div>

            <p className="passText">{underText}</p>
            <div className="entry">
                <input  onChange={handleChange} className={["inputPass", type === 'error' && 'error-input' ].join(' ')}></input>
                <button className="eye" onClick={afterIconAction}>
                    <img src={isHide ? eyeClose : eyeOpen} alt="img"/>
                </button>

            </div>
            
            <p className={['subText', type ? type : 'default'].join(" ")}>{subText}</p>
            {/* <hr className="line">{success}</hr> */}
        </div>
    )

const Eyes = ({ action, onEyesClick }) => {


  return (
    <button
      className='action'
      onClick={onEyesClick}>
      <img src={action}></img>
    </button>
  )
}

const onEyesClick = () => {
  console.log('нажатие было');
}

const Input = ({ value, subText, type, success, error, afterIcon, isHide, afterIconAction }) => {

  return (
    <div>

      <p className="passText">{value}</p>
      <div className="entry">
        <input className="inputPass"></input>
        <button className="eye" onClick={onEyesClick}>

          <Eyes action={eyeOpen} />
        </button>

      </div>
      <p className="error">{error}</p>
      <p className="subText">{subText}</p>
      {/* <hr className="line">{success}</hr> */}
    </div>
  )
}

export default Input;