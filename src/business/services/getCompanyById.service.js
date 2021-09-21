'use strict'
const companiesRepository = require('../../data/repository/companies.repository')
const companyConverter = require('../converter/company.converter')

const execute = async (id) => {
	try {
		const companyData = await getCompanyById(id)
		return companyConverter.parseCompanyResponse(companyData)
	} catch (error) {
		throw error
	}
}

const getCompanyById = async (id) => {
	try {
		const result = await companiesRepository.getCompanyById(id)
		logger.info('RESULT: ', JSON.stringify(result))

		logger.info('Validando existencia de empresa')
		if (result.P_CODIGO !== '000') {
			throw { httpCode: 404, code: result.P_CODIGO, message: result.P_MENSAJE }
		}
		return result
	} catch (error) {
		throw error
	}
}

module.exports = { execute }
