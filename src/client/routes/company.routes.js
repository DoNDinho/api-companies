const express = require('express')
const insertCompanyService = require('../../business/services/insertCompany.service')
const router = express.Router()
const { basePath } = require('../../business/utils/configs/api.config')
const authMiddleware = require('../middlewares/authentication/authentication.middleware')
const headersValidation = require('../middlewares/validations/headers.validation')
const insertCompanyValidation = require('../middlewares/validations/insertCompany.validation')

router.post(
	`${basePath}/v1/companies`,
	[authMiddleware, headersValidation, insertCompanyValidation],
	async (req, res, next) => {
		try {
			// TODO Colocar funcion de traceRequest
			const transactionId = req.headers['transaction-id']
			logger.addContext('transaction_id', transactionId)
			const response = await insertCompanyService.execute(req.body.data)
			logger.info(JSON.stringify({ message: 'Empresa insertada correctamente', data: response }))
			res.status(201).json(response)
		} catch (error) {
			next(error)
		}
	}
)

module.exports = router
