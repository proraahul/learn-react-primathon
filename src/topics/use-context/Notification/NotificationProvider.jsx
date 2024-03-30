import React from 'react'
import { createContext } from 'react';
import { useState } from 'react'
import Notification from './Notification';
import NotificationButton from './NotificationButton';

export const notificationContext = createContext();

const NotificationProvider = () => {
    const [isNotification, setIsNotification] = useState(null);

    const showNotification = (msg) => {
        setIsNotification(msg);
    }

    const hideNotification = () => {
        setIsNotification(null);
    }

    return (
        <notificationContext.Provider value={{isNotification, showNotification, hideNotification}}>
            <NotificationButton />
            <Notification />
        </notificationContext.Provider>
    )
}

export default NotificationProvider