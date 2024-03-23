import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const languageContext = createContext();

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = (lang) => {
        setLanguage(lang);
    }

  return (
    <languageContext.Provider value={{language, changeLanguage}}>
            {children}
    </languageContext.Provider>
  )
}

export default LanguageProvider