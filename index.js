const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('<h1 style="font-family: sans-serif;">rest api ready!!</h1>')
})
 
app.listen(3000)
