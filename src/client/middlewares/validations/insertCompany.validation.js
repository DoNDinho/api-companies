'use strict'
const express = require('express')
const companyValidation = express.Router()
const Ajv = require('ajv')
const companySchema = require('./models/company.model')

companyValidation.use((req, res, next) => {
	const data = req.body
	const ajv = new Ajv()
	const validate = ajv.compile(companySchema)
	const valid = validate(data)

	logger.info('Validando request de la solicitud')
	if (valid) {
		logger.info('Request valido')
		next()
	} else {
		logger.error(`Request invalido - ${validate.errors[0].message}`)
		res.status(400).json({
			code: '400',
			message: validate.errors[0].message
		})
	}
})

module.exports = companyValidation
