import React, { useRef, useState } from 'react'

const Timer = () => {
    const intervalRef = useRef(null);
    const [time, setTime] = useState(0);

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTime(prevTime => prevTime+1);
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    }

  return (
    <div className='border p-4 m-5'>
        <p className='text-red-500 p-5'>Time: {time}</p>
        <button onClick={startTimer} className='border p-2 bg-green-600 font-semibold'>Start Timer</button>
        <button onClick={stopTimer} className='border p-2 bg-green-600 font-semibold'>Stop Timer</button>
    </div>
  )
}

export default Timer