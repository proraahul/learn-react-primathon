import React from 'react'
import { useRef } from 'react';

const InputFocus = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        // document.getElementById('input-focus').focus();
        inputRef.current.focus();
    }

  return (
    <div>

        <input type="text" className='border'  /* id='input-focus'*/ ref={inputRef}/> 
        <button onClick={handleClick}>Focus Input</button>

    </div>
  )
}

export default InputFocus