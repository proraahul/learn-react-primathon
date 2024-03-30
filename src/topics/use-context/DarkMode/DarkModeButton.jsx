import React, { useContext } from 'react'
import { themeContext } from './DarkModeProvider'

const DarkModeButton = () => {
    const {toggleMode} = useContext(themeContext);

    const handleToggle = () => {
        toggleMode();
    }

  return (
    <button className='border p-2 bg-teal-600 font-semibold text-white' onClick={handleToggle}>Toggle Theme Button</button>
  )
}

export default DarkModeButton