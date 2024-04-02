import React, { useRef } from 'react'

const ChangeColor = () => {
    const elementRef = useRef(null);

    const handleClick = () => {
        elementRef.current.style.backgroundColor = 'green';

    }

  return (
    <div ref={elementRef} style={{backgroundColor: 'red', height: '200px', width: '200px'}}>
        <button onClick={handleClick} className='border p-2 m-2 bg-teal-300'>Change</button>
    </div>
  )
}

export default ChangeColor