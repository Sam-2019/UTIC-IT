import React from "react";
import "./popup.css";

const PopUp = ({ children, close }) => {
  return (
    <div className="popup-wrapper">
      <div className="popup">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PopUp;
