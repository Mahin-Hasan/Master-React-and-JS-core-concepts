import CountdownTimer from ".";
import './timer.css'


const CountdownTimerTest = () => {
    const handleTimeFinish = () => {
        alert("Times Up !!!")
    }


    return (
        <div className="countdown-timer-container">
            <h2>CountDown Timer</h2>
            <CountdownTimer initialTime={900} onTimeFinish={handleTimeFinish} />
        </div>
    );
};

export default CountdownTimerTest;