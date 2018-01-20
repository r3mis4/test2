const express = require('express')
const app = express()
const fs = require('fs')
const https = require('https')
const privateKey = fs.readFileSync('key.pem')
const certificate = fs.readFileSync('certificate.pem')
https.createServer({
  key: privateKey,
  cert: certificate
}, app).listen(4500)
app.get('/', (req, res) => {
  let ip = req.ip
  res.send(ip)
})
app.listen(3000, () => console.log('My app listening on port 3000!'))
