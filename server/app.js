'use strict'

const express = require('express')
const app = express()

app.use((request, response, next) => {
	console.log(`sku: ${request.params.sku}`)
	next()
})
app.use(require('./router'))

module.exports = app
