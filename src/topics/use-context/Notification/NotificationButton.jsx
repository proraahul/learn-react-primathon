import React, { useContext } from 'react'
import { notificationContext } from './NotificationProvider'

const NotificationButton = () => {
    const { showNotification } = useContext(notificationContext);

    const handleClick = () => {
        showNotification('notification here');
    }

    return (
        <button className="border p-2 bg-teal-500" onClick={handleClick}>Show Notification</button>
    )
}

export default NotificationButton