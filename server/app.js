// server/app.js
'use strict'

const express = require('express')
const app = express()

app.get('/', (request, response, next) => {
  response.send('Hello World')
})

app.post('/', (request, response, next) => {
  response.status(201).send('Hello World')
})

app.delete('/', (request, response, next) => {
  response.sendStatus(204)
})

module.exports = app
