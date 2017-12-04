'use strict'

const db = require('../config/mongo')

const PriceRepository = {
  bySku(sku, callback) {
    db.collection('prices').findOne({ sku: sku }, callback)
  }
}

module.exports = PriceRepository