// Рута за читање целог низа
// Рута за читање једног елемента (по id)
// Рута за брисање једног елемента (по id)
// Рута за додавање елемента
// Рута за мењање елемента (по id)

import express from 'express'

const app = express()
app.use(express.json())

let todos = [
    {
        id: 1,
        text: 'dsjhfsdjk',
        done: true
    }
]

app.get('/todos/:id', (req, res) => {
    const id = req.params.id
    const todo = todos.find(todo => todo.id == id)
    res.json(todo)
    res.status(200).end()
})

app.get('/todos', (req, res) => {
    res.json(todos)
    res.status(200).end()
})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id
    const index = todos.findIndex(todo => todo.id == id)
    res.json(todos.splice(index, 1))
    res.status(204).end()
})

app.post('/todos', (req, res) => {
    const newItem = req.body
    const id = todos.length > 0 ? 
                Math.max(...todos.map(todo => todo.id)) + 1 
                : 1
    newItem.id = id
    newItem.done = false
    todos = todos.concat(newItem)
    res.json(newItem)
    res.status(200).end()
})

app.patch('/todos/:id', (req, res) => {
    const id = req.params.id
    let index = todos.findIndex(todo => todo.id == id)
    if (index != -1) {
        todos[index] = {...todos[index],...req.body}
        res.json(todos[index])
        res.status(200).end()
    }
    else res.status(404).end()
})

const PORT = 3003
app.listen(PORT, () => console.log(`Server is running on: ${PORT}`))
