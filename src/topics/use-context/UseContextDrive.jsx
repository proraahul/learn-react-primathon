import React, { useContext, useState } from 'react'
import CartProvider from './AddToCart/CartProvider'
import CounterProvider from './counter/CounterProvider'
import DarkModeProvider from './DarkMode/DarkModeProvider'
// import ComponentA from './assignment/ComponentA'
// import NameDisplay from './example/NameDisplay'
// import NameUpdate from './example/NameUpdate'
// import UserProvider from './example/userContext'
import LanguageProvider from './LanguageContext/LanguageProvider'
import LanguageSwitcher from './LanguageContext/LanguageSwitcher'
import TranslatedText from './LanguageContext/TranslatedText'
import NotificationProvider from './Notification/NotificationProvider'

const UseContextDrive = () => {

  return (
    // <div className='border p-3 m-5'>
    //   <ComponentA />
    // </div>

    // <UserProvider>
    //   <NameDisplay />
    //   <NameUpdate />
    // </UserProvider>

    // <LanguageProvider>
    //     <LanguageSwitcher/>
    //     <TranslatedText />
    // </LanguageProvider>

    // <CounterProvider/>

    // <CartProvider />
    // <NotificationProvider />
    <DarkModeProvider />

  )
}

export default UseContextDrive