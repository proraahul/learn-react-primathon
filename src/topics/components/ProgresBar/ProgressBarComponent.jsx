import React, { useEffect, useState } from 'react'
import ProgressBarChild from './ProgressBarChild'

const ProgressBarComponent = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress >= 100 ? 0 : prevProgress+10);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  return (
    <div>
      <h1 className='m-4 text-xl font-bold text-red-600'>Progress Bar Project</h1>
      <ProgressBarChild value={progress} max={100}/> 
    </div>
  )
}

export default ProgressBarComponent