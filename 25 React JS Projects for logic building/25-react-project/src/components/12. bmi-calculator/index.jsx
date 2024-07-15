import { useState } from "react";
import './bmi.css'


const BMIcalculator = () => {
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null)
    const [BMI, setBMI] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')

    function calculateBMI() {
        if (!height || !weight) {
            setErrorMsg('Please enter both height and weight');
            return;
        }
        const numericHeight = +height;
        const numericWeight = +weight;

        if (isNaN(numericHeight) || isNaN(numericWeight) || numericHeight <= 0 || numericWeight <= 0) {
            setErrorMsg('Please enter valid numeric values for height and weight');
            return;
        }
        const calculateHeightInMeters = numericHeight / 100;
        const calculateBmiValue = (numericWeight / (calculateHeightInMeters * calculateHeightInMeters)).toFixed(2)
        setBMI(calculateBmiValue);
        setErrorMsg('')
    }


    return (
        <div className="bmi-calculator-container">
            <h2>BMI Calculator</h2>
            <div className="value-container">
                <label>Height (cm):</label>
                <input onChange={(e) => setHeight(e.target.value)} type="number"
                    value={height}
                />
            </div>
            <div className="value-container">
                <label>Weight (kg):</label>
                <input onChange={(e) => setWeight(e.target.value)} type="number"
                    value={weight}
                />
            </div>
            <button onClick={calculateBMI}>Calculate BMI</button>
            {
                errorMsg ? <p className="error-msg-text">{errorMsg}</p> : null
            }
            {
                errorMsg !== '' ? null :
                    <p className="bmi-result-text">
                        {
                            BMI < 18.5 ? 'UnderWeght' :
                                BMI >= 18.5 && BMI < 24.9 ? 'Normal Weight' :
                                    BMI >= 25 && BMI < 29.9 ? 'Over Weight' : 'Obese'
                        }
                    </p>
            }
        </div>
    );
};

export default BMIcalculator;