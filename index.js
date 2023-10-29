const express = require('express')

// create an express server
const app = express()

// parse incoming request to JSON payload 
app.use(express.json())

// parse incoming request with URL-encoded payloads
app.use(express.urlencoded({ extended: true }))

// '/' API Route
app.get('/', (req, res) =>{
    res.status(200).json({ message: 'API está rodando'})
})

// Port
const port = process.env.PORT || 5500

// Listen for connection
app.listen(port, () => console.log(`Listening on Port: ${port}`))

