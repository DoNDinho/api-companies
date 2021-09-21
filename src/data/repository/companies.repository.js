'use strict'
const Runner = require('../database/oracle/runner/runner')
const sqlProcedures = require('../database/oracle/sql_procedures')

const insertCompany = async (company) => {
	try {
		const database = new Runner()
		const procedure = sqlProcedures.insertCompany(company)
		const result = await database.runProcedure(procedure)
		return result.outBinds
	} catch (error) {
		throw error
	}
}

const getListCompanies = async () => {
	try {
		const database = new Runner()
		const procedure = sqlProcedures.getListCompanies()
		const result = await database.runCursorProcedure(procedure)
		return result
	} catch (error) {
		throw error
	}
}

module.exports = { insertCompany, getListCompanies }
