'use strict';
const Runner = require('../database/oracle/runner/runner');
const sqlProcedures = require('../database/oracle/sql_procedures');

const getPayments = async (idCompany) => {
	try {
		const database = new Runner();
		const procedure = sqlProcedures.getPayments(idCompany);
		const result = await database.runCursorProcedure(procedure);
		return result;
	} catch (error) {
		throw error;
	}
};

module.exports = { getPayments };
