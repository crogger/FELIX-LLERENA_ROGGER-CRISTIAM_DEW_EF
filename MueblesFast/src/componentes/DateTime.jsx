// DateTime.js
import React, { useState, useEffect } from 'react';

const DateTime = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString();
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString();
    };

    return (
        <div className="date-time">
            <div>Fecha: {formatDate(dateTime)}</div>
            <div>Hora: {formatTime(dateTime)}</div>
        </div>
    );
}

export default DateTime;
