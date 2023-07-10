import React from "react";

function Input({ value, onChange, type, label }) {
  return (
    <div className="input">
      <label>{label}</label>
      <input value={value} onChange={onChange} type={type} />
    </div>
  );
}

export default Input;
