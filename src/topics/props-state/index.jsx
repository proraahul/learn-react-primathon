import React, {useState} from 'react'
import {ChildComponent, Counter} from './Props_State'

const PropsStateTogetherDriver = () => {

    // counter state
    const [count, setCount] = useState(0);

    // Parent Component
    const [data, setData] = useState('');
    const handleDataChange = (newData) => {
      setData(newData);
  };

  return (
    <div>
      <h1 className='font-semibold text-2xl underline'>here are a few examples of how React state and props can be used together in a React application:</h1>

      <h1>{count}</h1>

      <div className='border p-5 m-10'>
        <Counter title="Counter Example" count={count} setCount={setCount} />
      </div>

    

    {/* Parent Component */}
    {/* Question: How do you pass data from a parent component to a child component using props, and then update that data in the child component's state? */}
    <div>
      <ChildComponent data={data} onDataUpdate={handleDataChange} />
    </div>


    </div>
  )
}

export default PropsStateTogetherDriver