import React, { useContext } from 'react'
import { counterContext } from './CounterProvider'

const Counter = () => {
    const {count} = useContext(counterContext);

  return (
    <div className='border p-2 m-5'>
        <h1>Counter Component</h1>
        <p>Count: {count} </p>
    </div>
  )
}

export default Counter