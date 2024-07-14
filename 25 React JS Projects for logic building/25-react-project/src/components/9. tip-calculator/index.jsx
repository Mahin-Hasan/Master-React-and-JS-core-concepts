import { useState } from "react";
import './tip-calculator.css'


const TipCalculator = () => {
    const [billAmount, setBillAmount] = useState(null)
    const [tipPercentage, setTipPercentage] = useState(10)
    const [splitCount, setSplitCount] = useState(1)
    const [tipAmount, setTipAmount] = useState(null)
    const [errorMsg, eetErrorMsg] = useState('')

    function handleCalculateTip() {
        if (!billAmount || billAmount <= 0 || !tipPercentage || tipPercentage <= 0) {
            setTipAmount(null)
            eetErrorMsg("Please Enter Valid amount for Bill Amount & Tip percentage")
            return
        }
        const bill = parseFloat(billAmount);
        const tip = (bill * tipPercentage) / 100;
        const totalAmount = bill + tip;
        const tipAmountPerPerson = tip / splitCount;
        const totalAmountPerPerson = totalAmount / splitCount;

        setTipAmount({
            totalAmount: totalAmount.toFixed(2),
            tipPerPerson: tipAmountPerPerson.toFixed(2),
            totalPerPerson: totalAmountPerPerson.toFixed(2),
        })
        eetErrorMsg("")

    }

    return (
        <div className="tip-calculator">
            <h2>Tip Calculator</h2>
            <div className="input-field">
                <label>Bill Amount:</label>
                <input onChange={(e) => setBillAmount(e.target.value)} value={billAmount} type="number" />
            </div>
            <div className="input-field">
                <label>Tip Percentage:</label>
                <input onChange={(e) => setTipPercentage(e.target.value)} value={tipPercentage} type="number" />
            </div>
            <div className="input-field">
                <label>Number of People:</label>
                <input onChange={(e) => setSplitCount(e.target.value)} value={splitCount} type="number" />
            </div>
            <button onClick={handleCalculateTip}>Calculate Tip</button>
            {
                errorMsg ? <p className="error-msg">{errorMsg}</p> : null
            }
            {
                tipAmount ?
                    <div className="tip-result-container">
                        <p>Total Amount : {tipAmount.totalAmount}</p>
                        <p>Tip Per Person : {tipAmount.tipPerPerson}</p>
                        <p>Total Amount Per Person  : {tipAmount.totalPerPerson}</p>
                    </div>
                    : null
            }
        </div>
    );
};

export default TipCalculator;