const express = require('express')
const app = express()
app.get('/', (req, res) => {
  let ip = req.ip
  res.send(ip)
})
app.listen(3000, () => console.log('My app listening on port 3000!'))
