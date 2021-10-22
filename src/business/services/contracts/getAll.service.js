'use strict';
const contractsRepository = require('../../../data/repository/contracts.repository');
const contractConverter = require('../../converter/contract.converter');

const getContracts = async (idCompany) => {
	try {
		const contracts = await execute(idCompany);
		return Promise.all(
			contracts.map((contract) => contractConverter.parseContractResponse(contract))
		);
	} catch (error) {
		throw error;
	}
};

const execute = async (idCompany) => {
	try {
		const result = await contractsRepository.getContracts(idCompany);
		logger.info('RESULT: ', JSON.stringify(result));

		return result;
	} catch (error) {
		throw error;
	}
};

module.exports = { getContracts };
