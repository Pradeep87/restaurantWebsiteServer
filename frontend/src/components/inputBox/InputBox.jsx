import React from "react";
import "./inputBox.css";

const InputBox = ({
  icon,
  placeholder,
  inputName,
  phoneCode,
  value,
  onChange,width
}) => (
  <div className="userSignInInput" style={{ width:width?width:""}}  >
    <div className="icon">
      {phoneCode ? (
        <p style={{ fontSize: "16px", margin: "2px" }}>{phoneCode}</p>
      ) : null}
      {icon}
    </div>
    <input
      type="text"
      name={inputName}
      id=""
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default InputBox;
