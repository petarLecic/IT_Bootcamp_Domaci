import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { getQuotes } from "../service"
import Quote from "./Quote"

const Quotes = ({user}) => {
    const [quotes, setQuotes] = useState([])

    const history = useHistory()

    useEffect(() => {
        if (user) getQuotes().then(res => setQuotes(res.data))
        else history.push('/login')
    }, [])
    return (
            <>
                {quotes.map(quote => <Quote key={quote.id} quote={quote} />)}
            </>
    )
}

export default Quotes