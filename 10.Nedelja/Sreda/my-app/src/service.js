import axios from 'axios'

export const getUsers = () => axios.get('http://localhost:3001/users')
export const postUser = user => axios.post('http://localhost:3001/users', {...user})
export const getQuotes = () => axios.get('http://localhost:3001/quotes')
export const postQuote = quote => axios.post('http://localhost:3001/quotes', {...quote})