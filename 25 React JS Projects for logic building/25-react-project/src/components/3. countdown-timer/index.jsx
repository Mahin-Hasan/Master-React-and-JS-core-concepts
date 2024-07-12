import { useEffect, useRef, useState } from "react";

const CountdownTimer = ({initialTime,onTimeFinish}) => {

    const [time,setTime ] = useState(initialTime);
    const [isRunning,setIsRunning] = useState(true);
    const intervalReference = useRef();

    useEffect(()=>{
        if(isRunning){
            intervalReference.current = setInterval(() => {
                setTime(prevTime =>{
                    if(prevTime === 0 ){
                        clearInterval(intervalReference.current)
                        setIsRunning(false)

                        if(onTimeFinish){
                            onTimeFinish() //triggers handle time finish function on parent component
                        }
                    }
                    return prevTime -1
                })
            }, 1000);
        } else {
            clearInterval(intervalReference.current)
        }
        //unmount

        return ()=>{
            clearInterval(intervalReference.current)
        }

    },[isRunning,onTimeFinish])

    const min = Math.floor(time/60);
    const sec = time%60;

    function handleReset(){
        clearInterval(intervalReference.current)
        setTime(initialTime)
        setIsRunning(false);
    }
    function handleStart(){
        setIsRunning(true);
    }

    return (
        <div className="timer">
            <p>{String(min).padStart(2,'0')}:{String(sec).padStart(2,'0')}</p>
             <div className="timer-buttons">
             <button onClick={()=> setIsRunning(!isRunning)}>{isRunning ? 'Pause' : 'Resume'}</button>
             <button onClick={handleReset}>Reset</button>
             <button onClick={handleStart}>Start</button>
             </div>
        </div>
    );
};

export default CountdownTimer;