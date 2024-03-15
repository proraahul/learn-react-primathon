import React, { useContext } from 'react'
import { DataContext } from './ComponentA';

const ComponentG = () => {
const context = useContext(DataContext);

  return (
    <div className='border p-3 m-5'>
        ComponentG
        <p>Count: {context.count}</p>
        <button onClick={context.driveIncrement}>Increment</button>
        </div>
        
  )
}

export default ComponentG