'use strict'

const mongojs = require('mongojs')
const db = mongojs('localhost:27017/price')
//const db = mongojs('192.168.249.144:27017/price')

db.on('error', (err) => {
	console.log(err)
})

module.exports = db