import React from 'react'
import { useContext } from 'react'
import { themeContext } from './DarkModeProvider'

const DarkModeContent = () => {

    const {toggleDark} = useContext(themeContext);

    const style = {
        color : toggleDark ? 'black' : 'white', 
        backgroundColor: toggleDark ? 'green' : 'black',
        padding:'10px',
        margin:'5px',
        fontWeight: toggleDark ? '600' : '800'
    }

  return (
    <div style={style}>
        <p>theme mode context</p>
    </div>
  )
}

export default DarkModeContent