'use strict';
const contractRepository = require('../../../data/repository/contracts.repository');
const logger = require('../../utils/configs/log4js.config');

const insertContract = async (data) => {
	try {
		await execute(data);
		return data;
	} catch (error) {
		throw error;
	}
};

const execute = async (data) => {
	try {
		const result = await contractRepository.insertContract(data.contract);
		logger.info('RESULT: ', JSON.stringify(result));

		logger.info('Validando inserción de contrato');
		if (result.P_CODIGO !== '000') {
			throw { httpCode: 422, code: result.P_CODIGO, message: result.P_MENSAJE };
		}
		return result;
	} catch (error) {
		throw error;
	}
};

module.exports = { insertContract };
