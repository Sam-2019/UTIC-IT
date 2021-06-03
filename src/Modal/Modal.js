import React from "react";
import "./popup.css";

const PopUp = ({ children }) => {
  return (
    <div className="popup-wrapper">
      <div className="popup">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PopUp;
