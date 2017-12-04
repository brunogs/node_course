'use strict'

const express = require('express')
const app = express()

app.use(require('./router'))

module.exports = app
