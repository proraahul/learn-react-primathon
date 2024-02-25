import React, { useState } from 'react'
import { ChildComponent, Counter, ImageComponent } from './Props_State'

const PropsStateTogetherDriver = () => {

  // counter state
  const [count, setCount] = useState(0);

  // Parent Component
  const [date, setDate] = useState('');
  const handleDataChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
      {/* 1. Counter  */}
      <div>
        <h1 className='font-semibold text-2xl underline'>here are a few examples of how React state and props can be used together in a React application:</h1>

        <h1>{count}</h1>

        <div className='border p-5 m-10'>
          <Counter title="Counter Example" count={count} setCount={setCount} />
        </div>
      </div>


      {/* 2. Parent Component */}
      {/* Question: Explain how you can pass a callback function as a prop to a child component, and use that function to update the parent component's state. */}
      <div className='border p-5 m-10'>
        <ChildComponent date={date} onDateUpdate={handleDataChange} />

        <h1 className='mt-5'>Selected Date: {date}</h1>
      </div>

      {/* Example 3 */}
      <div className='border p-5 m-10'>
        <ImageComponent src="https://images.pexels.com/photos/18592820/pexels-photo-18592820/free-photo-of-a-sunflower-in-a-field-with-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Description of the
image" />
      </div>

      


    </>
  )
}

export default PropsStateTogetherDriver