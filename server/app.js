'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((request, response, next) => {
	// apply something here
	next()
})


app.use(require('./router'))

app.use((request, response, next) => {
  let err = new Error('deu ruim =/')
  err.status = 404
  next(err)
})


app.use((err, request, response, next) => {
  let status = err.status || 500;
  response.status(status).send(err.message)
  //logger.err
})

module.exports = app
