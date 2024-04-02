import React from 'react'
import { useRef } from 'react';

const InputFocus = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        // document.getElementById('input-focus').focus();
        inputRef.current.focus();
    }

  return (
    <div className="flex gap-3">
        <input type="text" className='border'  /* id='input-focus'*/ ref={inputRef}/> 
        <button onClick={handleClick} className='border p-2 bg-teal-600'>Focus Input</button>

    </div>
  )
}

export default InputFocus