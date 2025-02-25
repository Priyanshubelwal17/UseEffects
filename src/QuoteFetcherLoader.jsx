import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

export default function QuoteFetcherLoader() {
    const [quote, setQuote] = useState({ quote: "", author: "" })
    const [isLoading, setIsloading] = useState(true)
    useEffect(() => {
        async function fetchQuote() {
            const response = await fetch(RANDOM_QUOTE_URL)
            const jsonResponse = await response.json();
            const randomQuote = jsonResponse.quote;
            setQuote(randomQuote)
            setIsloading(false)
        }
        fetchQuote()
    }, [])


    return (
        <div>
            <p className="loader" style={{ opacity: isLoading ? 1 : 0 }} ></p>
            <h1> {quote.text} </h1>
            <h3> {quote.author} </h3>
        </div>
    )
}