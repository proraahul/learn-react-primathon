import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = () => {
    return (
        <div className='border p-3 m-5'>ComponentC
            <ComponentD />
        </div>
    )
}

export default ComponentC