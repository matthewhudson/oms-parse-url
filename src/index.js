#!/usr/bin/env node

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const urlParser = require('url')

app.use(bodyParser.json())

const port = process.env.PORT || 8080

app.post('/parse', (req, res) => {
  const { url = '' } = req.body
  res.json(urlParser.parse(url))
})

app.get('/health', (req, res) => res.send('OK'))

app.listen(port, () =>
  console.log(`Listening on localhost: http://localhost:${port}`)
)
