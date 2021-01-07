const express = require('express');
const app = express()
const mongoose = require('mongoose')
const bodyParsesr = require('bodyParsesr')
require('dotenv/config')

const PORT = 5000

const postRoutes = require('./routes/posts')

app.use('/posts', postRoutes)
app.use(bodyParsesr.json())

app.get('/', (req, res) => {
    res.send('Server is up')
})

mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
    console.log("connected")
})

app.listen(PORT)