'use strict';
const Runner = require('../database/oracle/runner/runner');
const sqlProcedures = require('../database/oracle/sql_procedures');

const insertChecklist = async (idContract, description) => {
	try {
		const database = new Runner();
		const procedure = sqlProcedures.insertChecklist(idContract, description);
		const result = await database.runProcedure(procedure);
		return result.outBinds;
	} catch (error) {
		throw error;
	}
};

const getChecklists = async (idContract) => {
	try {
		const database = new Runner();
		const procedure = sqlProcedures.getChecklists(idContract);
		const result = await database.runCursorProcedure(procedure);
		return result;
	} catch (error) {
		throw error;
	}
};

module.exports = { insertChecklist, getChecklists };
