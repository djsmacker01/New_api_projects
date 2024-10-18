const express = require('express')
const app = express()
const PORT = 8000

const staffProfile = {
    'nurudeen':{
    'age': 35,
    'birthName': 'Nurudeen Adewale Adedeji',
    'favoriteFood': 'Lamb',
    'hobbies': ['Reading', 'Cooking', 'Running'],
    'family': ['Mum', 'Dad', 'Brother'],
    'friends': ['Adewole', 'Ogundele', 'Ezekiel'],
    'occupation': 'Engineering',
    'BirthLocation': 'London,England'
    },
    
    'adewole': {
        'age': 25,
        'birthName': 'Adewole Ogundele',
        'favoriteFood': 'Chicken',
        'hobbies': ['Gardening', 'Photography', 'Running'],
        'family': ['Nurudeen', 'Mum', 'Sister'],
        'friends': ['Nurudeen', 'Ezekiel', 'Adewale'],
        'occupation': 'Doctor',
        'BirthLocation': 'Ibadan, Nigeria'
    },
    
    'ezekiel': {
        'age': 28,
        'birthName': 'Ezekiel Adewale',
        'favoriteFood': 'Pizza',
        'hobbies': ['Reading', 'Cooking', 'Traveling'],
        'family': ['Adewole', 'Mum', 'Brother'],
        'friends': ['Nurudeen', 'Adewale', 'Ogundele'],
        'occupation': 'Teacher',
        'BirthLocation': 'Lagos, Nigeria'
    },

    'unknown': {
        'age': 0,
        'birthName': 'Unknown',
        'favoriteFood': 'Unknown',
        'hobbies': ['Unknown'],
        'family': ['Unknown'],
        'friends': ['Unknown'],
        'occupation': 'Unknown',
        'BirthLocation': 'Unknown'
    }
    
}

 

// Middleware to parse JSON request bodies
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api', (req, res) => {
    res.json(staffProfile)
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})