'use strict';
const Runner = require('../database/oracle/runner/runner');
const sqlProcedures = require('../database/oracle/sql_procedures');

const getContracts = async (idCompany) => {
	try {
		const database = new Runner();
		const procedure = sqlProcedures.getContracts(idCompany);
		const result = await database.runCursorProcedure(procedure);
		return result;
	} catch (error) {
		throw error;
	}
};

const getContractById = async (idContract, idCompany) => {
	try {
		const database = new Runner();
		const procedure = sqlProcedures.getContractById(idContract, idCompany);
		const result = await database.runProcedure(procedure);
		return result.outBinds;
	} catch (error) {
		throw error;
	}
};

module.exports = { getContracts, getContractById };
