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

  },

  delete(request, response, next) {

  }
}

module.exports = PriceController