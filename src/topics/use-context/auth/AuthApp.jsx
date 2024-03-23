import React, { createContext, useState } from 'react'
// import AuthProvider from './AuthProvider'
import LoginForm from './LoginForm'
import UserInfo from './UserInfo'


export const AuthContext = createContext();

const AuthAppDrive = () => {

    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // Implement authentication logic here.
        console.log(`Logging in ${username} with password ${password}`);
        setUser([{"username": username, "password":password}]);

    }

    const logout = (username) => {
        // Implement logging out logic here.
        console.log(`Logging out ${username}`);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <LoginForm />
            <UserInfo />
        </AuthContext.Provider>
    )
}

export default AuthAppDrive