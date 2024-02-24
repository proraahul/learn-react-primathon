import React, { useState } from 'react';

const PptExamples = () => {

    

    function LoginForm(props) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            if (email && password) {
                props.onClick(email, password);
            }
        }



        return (
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <label htmlFor="email">
                    Email:
                    <input type="email" className='border' onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" className='border' onChange={(event) => setPassword(event.target.value)} />
                </label>
                <button type='submit' className='border w-16 p-2'>submit</button>
            </form>
        )
    }




    const handleClick = (email, password) => {
            console.log(email, password);
    };

    return (
        <div className="border p-5 m-10">
            <LoginForm onClick={handleClick} />

        </div>
    );
}

export default PptExamples;
