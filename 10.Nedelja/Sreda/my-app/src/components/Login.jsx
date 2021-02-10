import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getUsers } from "../service"

const Login = ({ setUser }) => {
    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(res => setUsers(res.data))
    }, [])

    const history = useHistory()

    const login = (username, password) => {
        let user = users.find(user => username === user.username && password === user.password)
        if (user) { // user && setUser(user)
            setUser(user)
            history.push('/quotes')
        } else alert('Wrong input/s')
    }

    return (
        <div>
            <input type="text" placeholder="Username" onChange={e => setInputUsername(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={e => setInputPassword(e.target.value)}/>
            <button onClick={() => login(inputUsername, inputPassword)}>Login</button>
            <Link to="/register" style={{margin:5}}>Sign Up</Link>
        </div>
    )
}

export default Login