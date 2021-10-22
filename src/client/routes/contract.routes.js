const express = require('express');
const { basePath } = require('../../business/utils/configs/api.config');
const logger = require('../../business/utils/configs/log4js.config');
const authMiddleware = require('../middlewares/authentication/authentication.middleware');
const headersValidation = require('../middlewares/validations/headers.validation');
const getContractsService = require('../../business/services/contracts/getAll.service');
const getContractService = require('../../business/services/contracts/getById.service');
const router = express.Router();

router.get(
	`${basePath}/v1/companies/:idCompany/contracts`,
	[authMiddleware, headersValidation],
	async (req, res, next) => {
		try {
			const transactionId = req.headers['transaction-id'];
			logger.addContext('transaction_id', transactionId);

			const response = await getContractsService.getContracts(req.params.idCompany);
			logger.info(JSON.stringify({ message: 'Contratos obtenido', data: response }));
			res.json({ data: { contracts: response } });
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	`${basePath}/v1/companies/:idCompany/contracts/:idContract`,
	[authMiddleware, headersValidation],
	async (req, res, next) => {
		try {
			const transactionId = req.headers['transaction-id'];
			logger.addContext('transaction_id', transactionId);

			const { idCompany, idContract } = req.params;
			const response = await getContractService.getContractById(idContract, idCompany);
			logger.info(JSON.stringify({ message: 'Contrato obtenido', data: response }));
			res.json({ data: { contract: response } });
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
