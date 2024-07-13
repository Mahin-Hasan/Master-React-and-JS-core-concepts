import { useEffect, useState } from "react";
import './quote.css'

const RandomQuoteGenerator = () => {
    const [loading, setLoading] = useState(false);
    const [quote, setQuote] = useState(null)

    function getRandomIndex() {
        return Math.floor(Math.random() * 16);
    }


    async function fetchQuote() {

        try {
            setLoading(true)
            const apiResponse = await fetch('https://type.fit/api/quotes', {
                method: 'GET'
            });
            const result = await apiResponse.json();
            // console.log(result[getRandomIndex()]?.text);
            // const output = result[getRandomIndex()]?.text;
            const output = result[getRandomIndex()];

            if (output) {
                setLoading(false)
                setQuote(output)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchQuote();
    }, [])
    function handleRefresh() {
        fetchQuote();
    }

    return (
        <div className='random-quote-generator'>
            <h2>Random Quote Generator</h2>
            <div className="quote-wrapper">
                {loading ? <h3>Loading Quote...</h3> : quote && <div><p>Author: {quote?.author}</p>
                   <p> Quote: {quote?.text}</p>
                </div>
                }
                <button onClick={handleRefresh}>Refresh</button>
            </div>
        </div>
    );
};

export default RandomQuoteGenerator;