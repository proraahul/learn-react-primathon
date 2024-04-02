// Example 5: Create a React component that uses the useRef hook to store a reference to a previous value. Implement a button that compares the current value with the previous value and displays a message indicating if they are equal.


import React, { useRef } from 'react'
import { useState } from 'react'

const ValueCompare = () => {
    const [value, setValue] = useState('');
    const previousValueRef = useRef('');

    const handleCompare = () => {
        if(value == previousValueRef.current){
            console.log('values are equal');
        }else{
            console.log(`new value is ${value} and old value was ${previousValueRef.current}`);
        }
        previousValueRef.current = value;
    }

  return (
    <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className='border'/>
        <button onClick={handleCompare}>Compare</button>
    </div>
  )
}

export default ValueCompare