import React, { useContext } from 'react'
import { counterContext } from './CounterProvider'

const CounterButtons = () => {

    const { count, Increment, Decrement } = useContext(counterContext);

    const handleIncrement = () => {
        console.log('increment', count);
        Increment()
    }

    const handleDecrement = () => {
        console.log('decrement', count );
        Decrement();
    }

    return (
        <div className='p-3'>
            <button className='border p-2 bg-green-600 text-white font-semibold' onClick={handleIncrement}>Increment</button>
            <button className='border p-2 bg-green-600 text-white font-semibold'
                onClick={handleDecrement}
            >Decrement</button>

        </div>
    )
}

export default CounterButtons