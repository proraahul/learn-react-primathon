import { useState } from "react";


const Counter = () => {
    const [counterNumber, setCounterNumber] = useState(0);
    // const [multiplyByThree, setMultiplyByThree] = useState(false);
    // const [multiplyByFive, setMultiplyByFive] = useState(false);

    const multiplyByThree = counterNumber % 3 == 0;
    const multiplyByFive = counterNumber % 5 == 0;

    // if(multiplyByThree %3 == 0){
    //     setMultiplyByThree(true);
    // }else if(multiplyByFive % 5 == 0){
    //     setMultiplyByFive(true);
    // }


    const handleIncrement = (val) => {
        setCounterNumber(counterNumber + val)
    }

    const handleDecrement = (val) => {
        setCounterNumber(counterNumber - val);
    }

    const styles = {
        color: multiplyByThree ? 'red' : multiplyByFive ? 'blue' : '',
        backgroundColor: multiplyByThree ? 'black' : multiplyByFive ? 'aqua' : '',
        'font-size': multiplyByThree ? '50px' : multiplyByFive ? '40px' : '',
      };


    return (
        <div className="w-full text-yellow-400">
            <h1 className='text-7xl mt-10' style={styles}>{counterNumber}</h1>
            <div className='mt-32'>
                <button className="p-2 text-lg rounded-[3px] bg-yellow-600 text-black m-4" 
                onClick={() => handleIncrement(1)}>Increment By 1</button>
                <button className="p-2 text-lg rounded-[3px] bg-yellow-600 text-black m-4" onClick={() => handleIncrement(2)}>Increment By 2</button>
                <button className="p-2 text-lg rounded-[3px] bg-yellow-600 text-black m-4" onClick={() => handleIncrement(3)}>Increment By 3</button>
                <button className="p-2 text-lg rounded-[3px] bg-yellow-600 text-black m-4" onClick={() => handleIncrement(4)}>Increment By 4</button>
                <button className="p-2 text-lg rounded-[3px] bg-yellow-600 text-black m-4" onClick={() => handleIncrement(5)}>Increment By 5</button>
                <div>
                    <button className="p-2 text-lg rounded-[3px] bg-sky-600 text-black m-4" onClick={() => handleDecrement(1)}>Decrement By 1</button>
                    <button className="p-2 text-lg rounded-[3px] bg-sky-600 text-black m-4" onClick={() => handleDecrement(2)}>Decrement By 2</button>
                    <button className="p-2 text-lg rounded-[3px] bg-sky-600 text-black m-4" onClick={() => handleDecrement(3)}>Decrement By 3</button>
                    <button className="p-2 text-lg rounded-[3px] bg-sky-600 text-black m-4" onClick={() => handleDecrement(4)}>Decrement By 4</button>
                    <button className="p-2 text-lg rounded-[3px] bg-sky-600 text-black m-4" onClick={() => handleDecrement(5)}>Decrement By 5</button>
                </div>
            </div>
        </div>
    )
}

export default Counter