import React from "react";
import "./checkBox.css";

function CheckBox({ name, tick }) {
  return tick ? (
    <label class="container">
      {name}
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  ) : (
    <div className="checkBox">
      <div>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <p>{name}</p>
    </div>
  );
}

export default CheckBox;
