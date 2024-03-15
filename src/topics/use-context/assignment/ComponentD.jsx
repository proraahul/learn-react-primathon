import React, { useContext } from 'react'
import { DataContext } from './ComponentA';
import ComponentE from './ComponentE';

const ComponentD = () => {
    const context = useContext(DataContext);
    return (
        <div className='border p-3 m-5'>
            ComponentD
            <ComponentE />
            <p>Count:  {context.count}</p>
        </div>
    )
}

export default ComponentD