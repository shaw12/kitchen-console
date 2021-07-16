import React from "react";
import ConsoleSetting from "./ConsoleSetting";
import "./Header.css";
import NewOrder from "./NewOrder";
import OpenButton from "./OpenButton.js";

const Header = ({isLoggedIn, setisLoggedIn}) => {
  return (
    <div className="headerContainer ">
      <div className="headerLeftContainer">
        <div className="headerLeftContentFirstRow">
          <span className="headerTitle">kitchenHALE Lab.</span>
          <span className="headerLabNo">#03</span>
        </div>
        <div className="headerId">
          <span>ID:01001-0015</span>
        </div>
        <div className="headerOpenButtonContainer clearfix">
          <OpenButton />
        </div>
      </div>
      <div className="headerMidConteiner">

      </div>
      <div className="headerRightContainer">
        <div className="headerBellContainer">
          <NewOrder />
        </div>
        <div className="headerRightSubContainer">
          <ConsoleSetting isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
        </div>
      </div>
    </div>
  );
};

export default Header;
