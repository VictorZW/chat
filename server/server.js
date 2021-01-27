const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017'

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb");
})

const app = express()

app.get('/', (req, res) => {
    res.send('<H1>Hi node</H1>')
})

app.get('/data', (req, res) => {
    res.json({
        name: '老张',
        path: 'mua'
    })
})

app.listen(9003, () => {
    console.log('node is work on port 9003')
})
