'use strict'

const db = require('../config/mongo')

const PriceRepository = {
  bySku(sku, callback) {
    db.collection('prices').findOne({ sku: sku }, callback)
  },
  insert(body, callback) {
  	db.collection('prices').insert(body, callback)
  },
  delete(sku, callback) {
  	db.collection('prices').remove({ sku: sku }, callback)
  }
}

module.exports = PriceRepository