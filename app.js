const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const nodeRoute = require('./routes/noteRoutes')

// middleware json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/notes',nodeRoute);

// setup database mongodb
mongoose.connect('mongodb://127.0.0.1:27017/notes').then(() => {
    console.log('connect db')
})

// setup server
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`)
})