import React, { Component, useState } from 'react';
import { BsExclamationCircle } from "react-icons/bs";



const InputComp = ({
 placeholder,
 value,
 onChange,
 type,
 errorMessage,
 // InputIsvalid,
 required,
 pattern,
 id,
 validerrorMessage,
 onFocus
}) => {
 const [focused, setFocused] = useState(false);
 const [validationError, setValidationError] = useState(false);


 const changeFocus = (e) => {
  onChange(e)
  setFocused(false);
  setValidationError(false)
 }
 const handleFocus = (e) => {
  let re = null
  if (pattern) {
   re = new RegExp(pattern)
  }
  if (re && !re?.test(e.target.value)) {
   if (required && e.target.value.trim() === '') {
    setFocused(true);
   } else {
    setValidationError(true)
   }
   // InputIsvalid(false)
  } else if (required && e.target.value.trim() === '') {
   setFocused(true);
   // InputIsvalid(false)
  } else {
   setFocused(false);
   // InputIsvalid(true)
  }
 }

 return (
  <div>
   <input
    className={`form-control`}
    placeholder={placeholder}
    onChange={changeFocus}
    value={value}
    type={type || 'text'}
    autoComplete={false}
    onBlur={handleFocus}
    pattern={pattern}
    style={{ borderColor: focused || validationError ? 'red' : null }}
    id={id}
    onFocus={() => onFocus ? onFocus() : null}
   />
   <div style={{ color: '#F90221', textAlign: 'start', position: 'relative', bottom: 3, left: 10, height: 20 }}>
    {focused ? <><span style={{ fontSize: 16 }}>
     <BsExclamationCircle />
    </span> {errorMessage}</> : null}
    {validationError ? <><span style={{ fontSize: 16 }}>
     <BsExclamationCircle />
    </span> {validerrorMessage}</> : null}
   </div>
  </div>
 );
}

export default InputComp;
