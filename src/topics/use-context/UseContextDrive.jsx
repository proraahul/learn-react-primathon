import React, { useContext, useState } from 'react'
import ComponentA from './assignment/ComponentA'
import NameDisplay from './example/NameDisplay'
import NameUpdate from './example/NameUpdate'
import UserProvider from './example/userContext'

const UseContextDrive = () => {


  return (
    // <div className='border p-3 m-5'>
    //   <ComponentA />
    // </div>

    <UserProvider>
      <NameDisplay />
      <NameUpdate />
    </UserProvider>

  )
}

export default UseContextDrive