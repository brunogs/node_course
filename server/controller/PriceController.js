'use strict'

const PriceController = {

  bySku(request, response, next) {
  	let sku = request.params.sku
  	response.send(`by sku ${sku}`)
  },

  create(request, response, next) {

  },

  update(request, response, next) {

  },

  delete(request, response, next) {

  }
}

module.exports = PriceController