// server/app.js
'use strict'

const express = require('express')
const app = express()

app.get('/', (request, response, next) => {
  response.send('Hello World')
})

app.listen(3000)
