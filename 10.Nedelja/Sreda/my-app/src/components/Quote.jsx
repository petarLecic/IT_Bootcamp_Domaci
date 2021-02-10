const Quote = ({quote}) => {
    return (
        <div>
            <h1>{quote.text}</h1>
            <p>- {quote.author}</p>
        </div>
    )
}

export default Quote