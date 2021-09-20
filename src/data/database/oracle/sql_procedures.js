'use strict'
const oracledb = require('oracledb')

const insertCompany = (company) => {
	const { number, validator } = company.company_identification
	const { name, email, phone } = company.company_data
	const { city, street } = company.company_address

	return {
		name: 'SP_INSERTAR_EMPRESA',
		statement: `BEGIN SP_INSERTAR_EMPRESA('${number}','${validator}','${name}','${email}','${phone}','${city}','${street}',:P_CODIGO,:P_MENSAJE); END;`,
		bind: {
			P_CODIGO: { dir: oracledb.BIND_OUT },
			P_MENSAJE: { dir: oracledb.BIND_OUT }
		}
	}
}

module.exports = { insertCompany }
