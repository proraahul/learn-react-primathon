import React, { useState } from 'react'

const Sakshi = () => {

    const [count, setCount] = useState(10);

    const HandleIncrement = (value) => {
        setCount(count + value);
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-7xl'>{count}</h1>
            <div className='flex gap-4'>
                <button className='p-2 border' onClick={() => HandleIncrement(1)}>Increment By 1</button>
                <button className='p-2 border' onClick={() => HandleIncrement(2)}>Increment By 2</button>
                <button className='p-2 border'>Increment By 3</button>
                <button className='p-2 border'>Increment By 4</button>
                <button className='p-2 border'>Increment By 5</button>
                <button className='p-2 border'>Decrement By 1</button>
                <button className='p-2 border'>Decrement By 2</button>
                <button className='p-2 border'>Decrement By 3</button>
                <button className='p-2 border'>Decrement By 4</button>
                <button className='p-2 border'>Decrement By 5</button>
            </div>
        </div>
    )
}

export default Sakshi;