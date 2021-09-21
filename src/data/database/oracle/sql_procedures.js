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

const getListCompanies = () => {
	return {
		name: 'SP_LISTAR_EMPRESAS',
		statement: `BEGIN SP_LISTAR_EMPRESAS(:P_RECORDSET, :P_COUNT, :P_CODIGO, :P_MENSAJE); END;`,
		bind: {
			P_RECORDSET: { type: oracledb.DB_TYPE_CURSOR, dir: oracledb.BIND_OUT },
			P_COUNT: { type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_OUT },
			P_CODIGO: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_MENSAJE: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT }
		}
	}
}

module.exports = { insertCompany, getListCompanies }
