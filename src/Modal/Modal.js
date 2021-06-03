import React from "react";
import "./modal.css";

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
