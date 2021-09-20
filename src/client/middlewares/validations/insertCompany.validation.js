'use strict'
const express = require('express')
const insertCompanyValidation = express.Router()
const Ajv = require('ajv')
const insertCompanySchema = require('./models/insertCompany.model')

insertCompanyValidation.use((req, res, next) => {
	const data = req.body
	const ajv = new Ajv()
	const validate = ajv.compile(insertCompanySchema)
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

module.exports = insertCompanyValidation
