import React, { useState } from 'react'



  // 1. Counter Component:
  export function Counter(props) {
   const {title, count, setCount} = props;

   const handleIncrement = () => {
    setCount(count+1);
   }

    return(
        <div>
            <h1>{title}</h1>
            <h2>counter: {count}</h2>
            <button className='border p-2' onClick={handleIncrement}>Increment</button>
        </div>
    )
};


// 2.  parent Component:
//Question: How do you pass data from a parent component to a child component using props, and then update that data in the child component's state?

export function ChildComponent(props){
    const { data, onDateUpdate } = props;
    const [childData, setChildData] = useState('');

    const handleOnChange = (newChildDate) => {
        setChildData(newChildDate);
        onDateUpdate(newChildDate);
    }

    return(
            <div>
                <input type="text" onChange={(e) => handleOnChange(e.target.value)} value={childData}/>
            </div>
    )
}



