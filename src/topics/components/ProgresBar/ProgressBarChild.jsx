import React from 'react'

const ProgressBarChild = ({value, max}) => {
    const percentage = Math.floor((value/max )* 100);



  return (
    <div className="w-full h-4 bg-gray-300 flex flex-col justify-center m-5">
        <div className="h-2 bg-blue-500 rounded" style={{'width' : `${percentage}%`}}>
            {percentage}%
        </div>
    </div>
  )
}

export default ProgressBarChild