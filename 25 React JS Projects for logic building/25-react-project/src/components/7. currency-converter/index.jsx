import { useEffect, useState } from "react";
import './currency.css'


const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('BDT');
    const [exchangeRate, setExchangeRate] = useState();
    const [convertedAmount, setConvertedAmount] = useState();
console.log(fromCurrency);
    async function fetchExchangeRate() {
        const apiResponse = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`, {
            method: 'GET'
        })
        const result = await apiResponse.json();
        // console.log(result?.rates[toCurrency]);
        const calculatedRate = result?.rates[toCurrency];
        setExchangeRate(calculatedRate);
        setConvertedAmount((amount*calculatedRate).toFixed(2))
    }

    useEffect(() => {
        fetchExchangeRate()
    }, [amount, fromCurrency, toCurrency])

    function handleAmountChange(e) {
        setAmount(e.target.value)
    }

    function handleFromCurrencyChange(e) {
        setFromCurrency(e.target.value)
    }
    function handleToCurrencyChange(e) {
        setToCurrency(e.target.value)
    }
    return (
        <div className="currency-converter">
            <h2>Currency Converter</h2>
            <div className="input-container">
                <input
                    value={amount}
                    onChange={handleAmountChange}
                    type="number"
                    name="amount"
                    placeholder="Enter Amount"
                />
                <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                    <option value={"USD"}>USD</option>
                    <option value={"BDT"}>BDT</option>
                    <option value={"CAD"}>CAD</option>
                </select>
            </div>
            <p>TO</p>
            <div className="input-container">
                <input type="text" value={convertedAmount} readOnly />
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value={"BDT"}>BDT</option>
                    <option value={"USD"}>USD</option>
                    <option value={"CAD"}>CAD</option>
                </select>
            </div>
            <p>Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}</p>
        </div>
    );
};

export default CurrencyConverter;