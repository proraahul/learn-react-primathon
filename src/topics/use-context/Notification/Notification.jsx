import React, { useContext } from 'react'
import { notificationContext } from './NotificationProvider'

const Notification = () => {

    const { isNotification, hideNotification } = useContext(notificationContext);

    const handleClick = () => {
        hideNotification(null);
    }

    return (
        <div>

            {
                isNotification && (
                    <div className='p-2'>
                        <p className='text-red-600'>{isNotification}</p>
                        <button onClick={handleClick} className="border p-2 bg-teal-500" >Hide Notification</button>
                    </div>
                )
            }

        </div>
    )
}

export default Notification