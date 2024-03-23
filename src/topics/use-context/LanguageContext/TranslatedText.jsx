import React, { useContext } from 'react'
import { languageContext } from './LanguageProvider';

const TranslatedText = () => {
    const {language} = useContext(languageContext);

    const translations = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
    }

  return (
    <div className='p-2 m-5'>
        <p className='text-red-600'>Translated Text: {translations[language]}</p>
    </div>
  )
}

export default TranslatedText