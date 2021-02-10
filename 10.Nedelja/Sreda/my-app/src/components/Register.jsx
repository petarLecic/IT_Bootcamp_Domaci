import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { getUsers, postUser } from "../service"

const Register = ({setUser}) => {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const history = useHistory()

    useEffect(() => {
        getUsers().then(res => setUsers(res.data))
    }, [])

    const isValid = () => {
        if (username.length < 4 || users.find(user => username === user.username)) return alert('Bad username')
        if (!email.includes('@') || users.find(user => email === user.email)) return alert('Bad email')
        if (password.length < 8 || !/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(password)) return alert('Password must have at last 1 letter and 1 number')
        return true
    }

    return (
        <div>
            <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
            <input type="email" placeholder="Email adress" onChange={e => setEmail(e.target.value)}/>
            <input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={() => {
                if (isValid()) {
                    postUser({username, email, password})
                    setUser({username, email, password})
                    history.push('/quotes')
                }
                }}>Register</button>
        </div>
    )
}

export default Register