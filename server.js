const express = require('express')
const app = express()


// Middleware to parse JSON request bodies
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})