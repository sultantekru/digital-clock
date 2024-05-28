import React, { useEffect, useState } from 'react';
import './style.css';

export const DigitalClock: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>('');

    const getRandomColor = (): string => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    useEffect(() => {
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;

        const interval = setInterval(() => {
            let clock = new Date().toLocaleTimeString();
            setCurrentTime(clock);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='digital-clock-container'>
            <h1 className='digital-clock'>{currentTime}</h1>
        </div>
    );
}
