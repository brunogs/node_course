'use strict'

const repository = require('../repository/PriceRepository')

const PriceController = {

  bySku(request, response, next) {
  	let sku = parseInt(request.params.sku)

  	repository.bySku(sku, (err, result) => {
  	  if (err) {
  	  	return response.send(err)
  	  }

  	  response.send(result)	
  	})  	
  },

  create(request, response, next) {
    let body = request.body

    repository.insert(body, (err, result) => {
      if (err) {
        return next(err)
      }
      response.status(201).send(result)

    })
  },

  update(request, response, next) {
    let sku = parseInt(request.params.sku, 10)
    let body = request.body

    repository.update(sku, body, (err, result) => {
      if (err) {
        return next(err)
      }
      response.send(result)
    })

  },

  delete(request, response, next) {
    let sku = parseInt(request.params.sku, 10)

    repository.delete(sku, (err, result) => {
      if (err) {
        return next(err)
      }
      response.sendStatus(204)
    })
  }

}

module.exports = PriceController