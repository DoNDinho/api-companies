const express = require('express');
const insertCompanyService = require('../../business/services/insertCompany.service');
const listCompanyService = require('../../business/services/listCompanies.service');
const getCompanyService = require('../../business/services/getCompanyById.service');
const updateCompanyService = require('../../business/services/updateCompany.service');
const router = express.Router();
const { basePath } = require('../../business/utils/configs/api.config');
const authMiddleware = require('../middlewares/authentication/authentication.middleware');
const headersValidation = require('../middlewares/validations/headers.validation');
const companyValidation = require('../middlewares/validations/insertCompany.validation');

router.post(
	`${basePath}/v1/companies`,
	[authMiddleware, headersValidation, companyValidation],
	async (req, res, next) => {
		try {
			// TODO Colocar funcion de traceRequest
			const transactionId = req.headers['transaction-id'];
			logger.addContext('transaction_id', transactionId);
			const response = await insertCompanyService.execute(req.body.data);
			logger.info(JSON.stringify({ message: 'Empresa insertada correctamente', data: response }));
			res.status(201).json({ data: response });
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	`${basePath}/v1/companies`,
	[authMiddleware, headersValidation],
	async (req, res, next) => {
		try {
			const transactionId = req.headers['transaction-id'];
			logger.addContext('transaction_id', transactionId);
			const response = await listCompanyService.execute();
			logger.info(JSON.stringify({ message: 'Lista de empresas obtenidas', data: response }));
			res.json({ data: { companies: response } });
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	`${basePath}/v1/companies/:id`,
	[authMiddleware, headersValidation],
	async (req, res, next) => {
		try {
			const transactionId = req.headers['transaction-id'];
			logger.addContext('transaction_id', transactionId);
			const response = await getCompanyService.execute(req.params.id);
			logger.info(JSON.stringify({ message: 'Empresa obtenida', data: response }));
			res.json({ data: { company: response } });
		} catch (error) {
			next(error);
		}
	}
);

router.put(
	`${basePath}/v1/companies/:id`,
	[authMiddleware, headersValidation, companyValidation],
	async (req, res, next) => {
		try {
			const transactionId = req.headers['transaction-id'];
			logger.addContext('transaction_id', transactionId);
			const response = await updateCompanyService.execute(req.params.id, req.body.data);
			logger.info(JSON.stringify({ message: 'Empresa actualizada', data: response }));
			res.json({ data: response });
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
