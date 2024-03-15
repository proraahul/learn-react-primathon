import React, { useState } from 'react'
import ComponentB from './ComponentB';


export const DataContext = React.createContext();

export default function ComponentA() {
    const [count, setCount] = useState(0);

    function driveIncrement() {
        setCount(c => c + 1)
    }



    return (
        <DataContext.Provider value={{ count, driveIncrement }}>
        <div className='border p-3 m-5'>
            ComponentA
            <ComponentB />
        </div>
        </DataContext.Provider>
    )
}
