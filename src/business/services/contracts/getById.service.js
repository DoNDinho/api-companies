'use strict';
const contractsRepository = require('../../../data/repository/contracts.repository');
const contractConverter = require('../../converter/contract.converter');

const getContractById = async (idContract, idCompany) => {
	try {
		const contract = await execute(idContract, idCompany);
		return contractConverter.parseContractResponse(contract);
	} catch (error) {
		throw error;
	}
};

const execute = async (idContract, idCompany) => {
	try {
		const result = await contractsRepository.getContractById(idContract, idCompany);
		logger.info('RESULT: ', JSON.stringify(result));

		logger.info('Validando existencia del contrato');
		if (result.P_CODIGO !== '000') {
			throw { httpCode: 404, code: result.P_CODIGO, message: result.P_MENSAJE };
		}
		return result;
	} catch (error) {
		throw error;
	}
};

module.exports = { getContractById };
