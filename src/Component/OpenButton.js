import React, { useState } from "react";
import "./OpenButton.css";

const Open = () => {
  const [openButton, setOpenButton] = useState(false);

  return (
    <>
      <label className={'button '+ `${openButton ? 'button-orange' : 'button-gray'}`} onClick={()=>{setOpenButton(!openButton)}}>
        <div className={'knob '+ `${openButton ? "knob-right" : "knob-left"}`}></div>
        <div className={'subscribe ' +`${openButton ? 'showText' : 'hideText'}`}>OPEN</div>
        <div className={'alright ' +`${!openButton ? 'showText' : 'hideText'}`}>CLOSE</div>
      </label>
    </>
  );
};

export default Open;