import React, { useMemo, useState } from 'react'
import { useCallback } from 'react';

const UseCallbackFn = () => {

  function MyComponent() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
      setCount(prevCount => prevCount + 1);
    }, []); // an empty array indicates that there are no dependencies
    return (
      <div className='border p-3 m-5'>
        <p>Count: {count}</p>
        <button onClick={handleClick} className='border p-2 bg-teal-600 rounded mt-2 font-semibold'>Increment Count</button>
      </div>);
  }

  function MyComponent1() {
    const [count, setCount] = useState(0);
    const doubleCount = useMemo(() => {
      console.log('calculating doubleCount');
      return count * 2;
    }, [count]); // only recompute when count changes
    return (
      <div className='border p-3 m-5'>
        <p>Count: {count}</p>
        <p>Double Count: {doubleCount}</p>
        <button onClick={() => setCount(prevCount => prevCount + 1)} className='border p-2 bg-teal-600 rounded mt-2 font-semibold'>Increment
          Count</button>
      </div>
    );
  }



  return (
    <>
      <MyComponent />
      <MyComponent1 />
    </>
  )
}

export default UseCallbackFn