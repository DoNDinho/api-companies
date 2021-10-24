const express = require('express');
const { basePath } = require('../../business/utils/configs/api.config');
const logger = require('../../business/utils/configs/log4js.config');
const authMiddleware = require('../middlewares/authentication/authentication.middleware');
const headersValidation = require('../middlewares/validations/headers.validation');
const getPaymentService = require('../../business/services/payments/getAll.service');
const router = express.Router();

router.get(
	`${basePath}/v1/companies/:idCompany/payments`,
	[authMiddleware, headersValidation],
	async (req, res, next) => {
		try {
			const transactionId = req.headers['transaction-id'];
			logger.addContext('transaction_id', transactionId);

			const response = await getPaymentService.getPayments(req.params.idCompany, req.query);
			logger.info(JSON.stringify({ message: 'Lista de pagos obtenidos', data: response }));
			res.json({ data: { payments: response } });
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
