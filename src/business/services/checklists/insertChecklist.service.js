'use strict';
const checklistRepository = require('../../../data/repository/checklists.repository');
const logger = require('../../utils/configs/log4js.config');

const execute = async (data) => {
	try {
		const idContract = data.contract.id;
		const checklists = data.checklists;

		await Promise.allSettled(
			checklists.map((checklist) => {
				insertChecklist(idContract, checklist.description);
			})
		);
		return data;
	} catch (error) {
		throw error;
	}
};

const insertChecklist = async (idContract, checklist) => {
	try {
		const result = await checklistRepository.insertChecklist(idContract, checklist);
		logger.info('RESULT: ', JSON.stringify(result));

		logger.info('Validando inserción de checklist');
		if (result.P_CODIGO !== '000') {
			throw { httpCode: 422, code: result.P_CODIGO, message: result.P_MENSAJE };
		}
		return result;
	} catch (error) {
		throw error;
	}
};

module.exports = { execute };
