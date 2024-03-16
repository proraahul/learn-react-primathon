import React from 'react'
import { useReducer } from 'react';

const initialState = {
    count: 0
}

const reducer = (state, action) => {

    console.log("state", state);
    console.log("action", action);

    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload.incrementBy - action.payload.decrementBy * action.payload.multiplyBy };
        case "decrement":
            return { count: state.count - action.payload.value };
        case "reset":
            return { count: 0 };
        default:
            return state;
    }
}


const ReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        // setState((prev) => prev + 1);
        console.log('increment click');
        dispatch({
            type: "increment",
            payload: {
                // value: 1,
                incrementBy: 2,
                decrementBy: 3,
                multiplyBy: 4,
            }
        });
    }

    const handleDecrement = () => {
        // setState((prev) => prev - 1);
        console.log('decrement click');
        dispatch({
            type: "decrement",
            payload: {
                value: 1,
            }
        });

    }
    const handleState = () => {
        // setState(0);
        console.log('reset click');
        dispatch({ type: "reset" });

    }

    return (
        <div className='border m-5 p-5'>
            <h1>Count: {state.count} </h1>
            <div className='m-3 p-5'>
                <button onClick={handleIncrement} className='m-3 border p-2 bg-green-500 font-semibold'>Increment</button>
                <button onClick={handleDecrement} className='m-3 border p-2 bg-green-500 font-semibold'>Decrement</button>
                <button onClick={handleState} className='m-3 border p-2 bg-green-500 font-semibold'>Reset</button>
            </div>
        </div>
    )
}

export default ReducerCounter;