import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({ quote: "", author: "" })

    // useEffect(() => {
    //     async function getInitialQuote() {
    //         const response = await fetch(RANDOM_QUOTE_URL)
    //         const jsonResponse = await response.json();
    //         const randomData = jsonResponse.quote;
    //         setQuote(randomData)
    //     }
    //     getInitialQuote();
    // }, [])

    useEffect(() => {
        fetchQuote();
    }, [])

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL)
        const jsonResponse = await response.json();
        const randomData = jsonResponse.quote;
        setQuote(randomData)
    }

    return (
        <div>
            <button onClick={fetchQuote} >Get Quote Using handler</button>
            <h1> {quote.text} </h1>
            <h3> {quote.author} </h3>
        </div>
    )
}