import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ( {Children} ) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // Implement your own authentication logic here.
        console.log(`Logging in ${username} with password ${password}`);
    }

    const logout = (username, password) => {
        // Implement your own logging out logic here.
        console.log('Logging out');
        setUser(null);
    };


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {Children}
        </AuthContext.Provider>
    )
}

export default AuthProvider