'use strict'

const router = require('express').Router()

router.get('/', (request, response, next) => {
  response.send('Hello World')
})

router.post('/', (request, response, next) => {
  response.status(201).send('Hello World')
})

router.delete('/', (request, response, next) => {
  response.sendStatus(204)
})

module.exports = router