import React from "react";
import "./button.css";

const Button = (props) => (
  <button
    style={{
      width: `${props.width}%`,
      height: props.height,
      background: "#ef3f5f",
    }}
    className={`${props.activeClass} button`}
    onClick={props.onClick}
  >
    {props.btnImg ? <img src={props.btnImg} alt="" className="btnImg" /> : null}

    {props.icon}
    {props.btnName}
  </button>
);

export default Button;
