import React from 'react'
import { useSelector } from 'react-redux'
import Controls from '../components/Controls'
import Header from '../components/Header'

const Redux = () => {
    const counter = useSelector(state => state.counter);

  return (
    <>
    <Header />
    <div className="flex justify-center">
    <center className='border p-5 m-5 w-fit'>
        <h2 className='font-bold text-2xl'>Counter current value: {counter} </h2>
        <Controls />
    </center>
    </div>
    </>
  )
}

export default Redux