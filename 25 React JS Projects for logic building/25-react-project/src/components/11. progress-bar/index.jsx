import { useState } from "react";
import './progress.css'



const ProgressBar = () => {
    const [progressPercent, setProgressPercent] = useState(0)
    const [errorMsg, setErrorMsg] = useState('')

    function handleProgressPercentage(e) {
        setProgressPercent(e.target.value)
        if (e.target.value > 100) {
            setErrorMsg('Please enter a value less than 100')
        } else {
            setErrorMsg('Please enter a value less than 100')
        }

    }

    return (
        <div className="progress-bar-container">
            <h2>Custom Progress bar</h2>
            <div className="progress-bars">
                <div className="wrapper">
                    {
                        progressPercent >= 0 && progressPercent <= 100 ?
                            <div style={{ width: `${progressPercent}%` }} className="innerWrapper">
                                {progressPercent}
                            </div>
                            :
                            <p>{errorMsg}</p>
                    }
                </div>
            </div>
            <div className="input-container">
                <label >Input Percentage: </label>
                <input onChange={handleProgressPercentage} type="number" value={progressPercent} />
            </div>
        </div>
    );
};

export default ProgressBar;