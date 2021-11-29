'use strict';
const checklistRepository = require('../../../data/repository/checklists.repository');
const checklistConverter = require('../../converter/checklist.converter');

const execute = async (idContract) => {
	try {
		const listChecklists = await getChecklists(idContract);
		return await Promise.all(
			listChecklists.map((checklist) => checklistConverter.checklistConverter(checklist))
		);
	} catch (error) {
		throw error;
	}
};

const getChecklists = async (idContract) => {
	try {
		const result = await checklistRepository.getChecklists(idContract);
		logger.info('RESULT ', result);

		return result;
	} catch (error) {
		throw error;
	}
};

module.exports = { execute };
