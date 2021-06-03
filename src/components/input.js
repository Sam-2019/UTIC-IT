import React from "react";

export const Input = ({
  type,
  placeholder,
  class_name,
  value,
  action,
  click,
  uniqueID,
  uniqueName,
  autocomplete
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={class_name}
      onChange={action}
      onClick={click}
      value={value}
      id={uniqueID}
      name={uniqueName}
      autoComplete={autocomplete}
    />
  );
};
