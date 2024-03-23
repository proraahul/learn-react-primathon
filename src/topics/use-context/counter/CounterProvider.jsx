import React, { useState } from 'react'
import { createContext } from 'react';
import Counter from './Counter'
import CounterButtons from './CounterButtons';


export const counterContext = createContext()

const CounterProvider = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(c => c + 1);
    }

    const Decrement = () => {
        if (count > 0) {
            setCount(c => c - 1);
        }
    };

    return (
        <counterContext.Provider value={{count, Increment, Decrement }}>
            <Counter />
            <CounterButtons />
        </counterContext.Provider>
    )
}

export default CounterProvider