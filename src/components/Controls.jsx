import React from 'react'
import { useDispatch } from 'react-redux'

const Controls = () => {
    const dispatch = useDispatch();

  return (
    <div className='m-5'>
        <button className="border p-2 bg-green-700 text font-semibold rounded" onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
        <button className="border p-2 ml-4 bg-red-700 font-semibold rounded" onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>

            <div className='mt-4'>
                <input type="number"  placeholder='Enter number to add' className='border outline-none p-2'/>
                <button className="border p-2 ml-4 bg-teal-700 font-semibold rounded">Add</button>
            </div>

    </div>
  )
}

export default Controls