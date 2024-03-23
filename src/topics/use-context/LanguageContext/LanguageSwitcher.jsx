import React from 'react'
import { useContext } from 'react'
import { languageContext } from './LanguageProvider';

const LanguageSwitcher = () => {
    const { language, changeLanguage} = useContext(languageContext);

    const handleLanguageChange = (e) => {
        changeLanguage(e.target.value);
    }

  return (
    <select value={language}  onChange={handleLanguageChange} className='border p-2 m-5'>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
    </select>
  )
}

export default LanguageSwitcher