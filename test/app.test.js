'use strict'

const app = require('../server/app')
const request = require('supertest')(app)
const assert = require('assert')

describe('app tests', (done) => {
	it('GET /', () => {
      request
        .get('/')
        .end((err, result) => {
        	assert.equal(result.status, 200)
        	done()
        })
	})
})

describe('app tests errors', () => {
	it('GET /not-found', (done) => {
	  request
        .get('/-3334/hhh')
        .end((err, result) => {
        	assert.equal(result.status, 404)
        	done()
        })
	})
})