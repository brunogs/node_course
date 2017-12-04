'use strict'

const router = require('express').Router()
const PriceController = require('../controller/PriceController')

router.get('/', (request, response, next) => {
  response.send('Hello blz')
})

router.get('/:sku', PriceController.bySku)
router.post('/', PriceController.create)
router.put('/:sku', PriceController.update)
router.delete('/:sku', PriceController.delete)

module.exports = router