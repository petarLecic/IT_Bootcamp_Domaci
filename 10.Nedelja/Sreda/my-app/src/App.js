// ## Направити апликацију која мења 'руте' на страници
// 1. Постоје дугмићи (Линкови) ка следећим путањама:
//     - Home
//     - Login
//     - Register
//     - Quotes
//     - CreateQuote
// 2. Компоненте:
//     - Home 
//         - Ако је корисник улогован, пребацујемо се на Quotes
//         - Ако корисник није улогован, пребацујемо се на Login
//     - Login
//         - Постоји Login форма
//         - Постоји линк ка регистрационој форми (ако корисник још увек није регистрован)
//     - Register
//         - Постоји регистрациона форма (username,email,password)
//             - username мора имати 4 карактера и бити јединствен у бази
//             - email мора бити валидан и јединствен у бази
//             - password мора имати 8 карактера и макар по једно слово и број
//     - Quotes
//         - Приказује све цитате из базе (само улогованим корисницима, иначе враћа на Login)
//     - CreateQuote
//         - Постоји форма за додавање цитата у базу

import { useState } from "react"
import CreateQuote from "./components/CreateQuote"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Login from "./components/Login"
import Quotes from "./components/Quotes"
import Register from "./components/Register"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const App = () => {
    const [user, setUser] = useState(null)

    return (
        <Router>
            <span>{user?.username}</span>
            {user ? <button onClick={() => setUser(null)}>Logout</button> : <Redirect to={'/login'} />}
            <Navigation />
            <Switch>
                <Route path="/login">
                    <Login setUser={setUser}/>
                </Route>
                <Route path="/register">
                    <Register setUser={setUser}/>
                </Route>
                <Route path="/quotes">
                    <Quotes user={user}/>
                </Route>
                <Route path="/createquote">
                    <CreateQuote />
                </Route>
                <Route path="/">
                    <Home user={user}/>
                </Route>
            </Switch>
        </Router>
    )
}
export default App
