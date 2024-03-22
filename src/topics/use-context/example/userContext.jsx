import React, { useState, createContext } from 'react';

export const { userContext } = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'rahul' });

    const updateUser = (name) => {
        setUser(prevUser => ({...prevUser, name}));
}


return (
    <userContext.Provider value={{ user, updateUser }}>
        {children}
    </userContext.Provider>
)
}

export default UserProvider;