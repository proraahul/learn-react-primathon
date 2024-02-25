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
// Question: Explain how you can pass a callback function as a prop to a child component, and use that function to update the parent component's state.

export function ChildComponent(props){
    const { date, onDateUpdate } = props;
    const [childData, setChildData] = useState('');

    const handleOnChange = (newChildDate) => {
        setChildData(newChildDate);
        onDateUpdate(newChildDate);
    }

    return(
            <div>
                <p>How do you pass data from a parent component to a child component using props, and then update that data in the child component's state?</p>
                <input type="date" onChange={(e) => handleOnChange(e.target.value)} value={childData} className='border'/>
                {/* <h1>{date}</h1>
                <p>{childData}</p> */}
            </div>
    )
}

{/* Example 3 */}
export function ImageComponent(props){
    return(
        <img src={props.src} alt={props.alt} width='400px'/>
    )
}

// example 4
// Question: Create a functional component ProductList that takes an array of products as a prop. Render a child component Product for each product in the array, passing the product information as props to the Product component. The Product component should display the product name, description, and price
