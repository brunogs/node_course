'use strict'

const app = require('../server/app')
const request = require('supertest')(app)
const assert = require('assert')

describe('Price CRUD tests', () => {
	it('GET /', (done) => {
      request
        .get('/3034')
        .end((err, result) => {
        	assert.equal(result.status, 200)
        	console.log(result.body)
        	done()
        })
	})

	it('POST / create new sku price', (done) => {
		let product = {
			sku: 123,
			priceSpecification: {
				price: 89.9,
				max: 212.9
			}
		}
		request
		  .post('/')
		  .send(product)
		  .end((err, result) => {
		  	assert.equal(result.status, 201)
		  	assert.ok(result.body._id)

		  	done()
		  })
	})

	it('PUT /:sku update price', (done) => {
		let product = {
			sku: 123,
			priceSpecification: {
				price: 109,
				max: 200
			}
		}
		request
		  .put('/123')
		  .send(product)
		  .end((err, result) => {
		  	assert.equal(result.status, 200)
		  	console.log(result.body)
		  	done()
		  })
	})
})