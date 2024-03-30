import React, { useRef, useEffect } from 'react';
function Form() {
    const firstNameRef = useRef(null);
    useEffect(() => {
        firstNameRef.current.focus();
    }, []);
    return (
        <form className='border p-5 m-5'>
            <label>
                First Name:
                <input type="text" ref={firstNameRef} className='border'/>
            </label>
            <label>
                Last Name:
                <input type="text" className='border'/>
            </label>
            <button>Submit</button>
        </form>
    );
}

export default Form