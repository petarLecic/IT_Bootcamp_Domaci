import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <Link style={{ padding: 5 }} to="/">Home</Link>
            <Link style={{ padding: 5 }} to="/login">Login</Link>
            <Link style={{ padding: 5 }} to="/register">Register</Link>
            <Link style={{ padding: 5 }} to="/quotes">Quotes</Link>
            <Link style={{ padding: 5 }} to="/createquote">CreateQuote</Link>
        </nav>
    )
}

export default Navigation