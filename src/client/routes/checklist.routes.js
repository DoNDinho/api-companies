const express = require('express');
const { basePath } = require('../../business/utils/configs/api.config');
const logger = require('../../business/utils/configs/log4js.config');
const authMiddleware = require('../middlewares/authentication/authentication.middleware');
const headersValidation = require('../middlewares/validations/headers.validation');
const insertChecklist = require('../../business/services/checklists/insertChecklist.service');
const listChecklists = require('../../business/services/checklists/listChecklist.service');
const router = express.Router();

router.post(
	`${basePath}/v1/checklists`,
	[authMiddleware, headersValidation],
	async (req, res, next) => {
		try {
			const transactionId = req.headers['transaction-id'];
			logger.addContext('transaction_id', transactionId);
			const response = await insertChecklist.execute(req.body.data);
			logger.info(JSON.stringify({ message: 'Checklist insertados', data: response }));
			res.json({ data: response });
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	`${basePath}/v1/checklists/:idContract`,
	[authMiddleware, headersValidation],
	async (req, res, next) => {
		try {
			const transactionId = req.headers['transaction-id'];
			logger.addContext('transaction_id', transactionId);
			const response = await listChecklists.execute(req.params.idContract);
			logger.info(JSON.stringify({ message: 'Checklist insertados', data: response }));
			res.json({ data: { checklists: response } });
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
