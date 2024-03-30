import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import DarkModeButton from './DarkModeButton'
import DarkModeContent from './DarkModeContent'

export const themeContext = createContext()

const DarkModeProvider = () => {
    const [toggleDark, setToggleDark] = useState(false);

    const toggleMode = () => {
        setToggleDark(!toggleDark);
    }

    return (
        <themeContext.Provider value={{toggleDark, toggleMode}}>
            <DarkModeButton />
            <DarkModeContent />
        </themeContext.Provider>
    )
}

export default DarkModeProvider