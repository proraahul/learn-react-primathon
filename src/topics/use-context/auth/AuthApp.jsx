import React from 'react'
import AuthProvider from './AuthProvider'
import LoginForm from './LoginForm'
import UserInfo from './UserInfo'

const AuthAppDrive = () => {
  return (
    <AuthProvider>
        <LoginForm />
        <UserInfo />
    </AuthProvider>
  )
}

export default AuthAppDrive