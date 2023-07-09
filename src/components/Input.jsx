
import React from 'react';

function Input({ value, onChange, placeholder,type}) {
    return (
      <input value={value} onChange={onChange} placeholder={placeholder} type={type}/>
    );
  }
  

export default Input;
 