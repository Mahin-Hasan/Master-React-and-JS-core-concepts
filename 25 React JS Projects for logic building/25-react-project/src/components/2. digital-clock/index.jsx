import { useEffect, useState } from "react";
import './clock.css'


const DigitalClock = () => {
    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])


    return (
        <div className="digital-clock">
            <h2>Digital Clock</h2>
            <div className="clock">
                <div className="time">
                    <span>{time.getHours().toString().padStart(2, "0")}:</span>
                    <span>{time.getMinutes().toString().padStart(2, "0")}:</span>
                    <span>{time.getSeconds().toString().padStart(2, "0")}</span>
                </div>
                <div className="date">
                    {
                        time.toLocaleDateString(undefined, {
                            weekday: 'long',
                            year: 'numeric',
                            month: "long",
                            day: 'numeric'
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default DigitalClock;