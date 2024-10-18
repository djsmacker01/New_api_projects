const express = require('express')
const app = express()
const PORT = 8000

// Middleware to parse JSON request bodies
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})