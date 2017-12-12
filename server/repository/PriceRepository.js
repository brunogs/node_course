'use strict'

const db = require('../config/mongo')

const PriceRepository = {
  bySku(sku, callback) {
    db.collection('prices').findOne({ sku: sku }, callback)
  },
  insert(body, callback) {
  	db.collection('prices').insert(body, callback)
  }
}

module.exports = PriceRepository