import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Categories from './components/Categories'
import Home from './components/Home'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Products from './components/Products'

const App = () => {
    const [products, setProducts] = useState()
    const [categories, setCategories] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/products').then(res =>{
            setProducts(res.data)
            setCategories([...new Set(res.data.map(product => product.category))])
        })
    }, [])

    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/categories">
                    <Categories categories={categories}/>
                </Route>
                <Route exact path="/">
                    <Home products={products}/>
                </Route>
                {
                    categories && products ? categories.map((category, index) => {
                        return(
                            <Route path={`/${category}`} key={index}>
                                <Products products={products} category={category} />
                            </Route>
                        )
                    }) : null
                }
            </Switch>
        </Router>
    )
}

export default App