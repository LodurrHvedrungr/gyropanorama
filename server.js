const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.listen(process.env.PORT || 8080, console.log('listening 8080...'))
