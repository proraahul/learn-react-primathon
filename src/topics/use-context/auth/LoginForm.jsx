import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthApp';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useContext(AuthContext);
    // console.log(login);

    // Submit the form to login with username and password
    function handleSubmit(e) {
        e.preventDefault()
        console.log(`User ${username} is trying to log in`);
        login(username, password);
    }

    return (
        <form className='border p-3 m-5 flex flex-col justify-around h-[20vh]' onSubmit={handleSubmit}>
            <label htmlFor="username">Username:
                <input type="text" id="username" name="username" required className='border' onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label htmlFor="password">Password:
                <input type="password" id="password" name="password" required className='border' onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Login" className='border p-2 bg-green-600 font-semibold text-white w-fit' />
        </form>
    )
}

export default LoginForm