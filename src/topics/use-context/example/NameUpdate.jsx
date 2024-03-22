import React, { useContext, useState } from 'react'
import { userContext } from './userContext'

const NameUpdate = () => {
    const { user, updateUser } = useContext(userContext);
    const [nameInput, setNameInput] = useState('');

    const handleNameChange = () => {
        updateUser(nameInput);
        setNameInput('');
    }

    return (
        <div>
            <input type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
            />
            <button onClick={handleNameChange}>Update Name</button>
        </div>
    )
}

export default NameUpdate