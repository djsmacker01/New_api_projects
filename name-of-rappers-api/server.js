const express = require('express')
const app = express()
const PORT = 8000

const savage = {
    'age': 35,
    'birthName': 'Nurudeen Adewale Adedeji',
    'favoriteFood': 'Lamb',
    'hobbies': ['Reading', 'Cooking', 'Running'],
    'family': ['Mum', 'Dad', 'Brother'],
    'friends': ['Adewole', 'Ogundele', 'Ezekiel'],
    'occupation': 'Engineering',
    'BirthLocation': 'London,England'
}

// Middleware to parse JSON request bodies
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api', (req, res) => {
    res.json()
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})