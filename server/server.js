const express = require('express')

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
