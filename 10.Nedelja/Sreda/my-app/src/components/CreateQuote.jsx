import { useState } from "react"
import { postQuote } from "../service"

const CreateQuote = () => {
    const [text, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    return (
        <form onSubmit={e => {
            if (text && author) postQuote({text, author})
            else {
                alert('All fields are required')
                e.preventDefault()
            }
        }}>
            <textarea cols="30" rows="10" placeholder="Quote..." onChange={e => setQuote(e.target.value)}></textarea>
            <div></div>
            <input type="text" placeholder="Author..." onChange={e => setAuthor(e.target.value)}/>
            <input type="submit"/>
        </form>
    )
}

export default CreateQuote