const express = require('express')
const app = express()

// NOTE: Middleware to parse incoming JSON content in the request body
app.use(express.json());

const port = 3000

// https://expressjs.com/en/starter/hello-world.html
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// TODO: Add CRUD operations for a resource
const items = []
// Create
// body item: { name: string, price: number }
// on input is JSON
// https://www.mongodb.com/resources/languages/what-is-json

app.post('/items', (req, res) => {
    const item = { name: req.body.name, price: req.body.price }
    items.push(item)
    res.status(201).send(item)
})

// Read
app.get('/items', (req, res) => {
    res.send(items)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
