'use strict'
const companiesRepository = require('../../data/repository/companies.repository')
const companyConverter = require('../converter/company.converter')

const execute = async () => {
	try {
		const listCompanies = await getListCompanies()
		return await Promise.all(listCompanies.map((company) => companyConverter.parseCompanyResponse(company)))
	} catch (error) {
		throw error
	}
}

const getListCompanies = async () => {
	try {
		const result = await companiesRepository.getListCompanies()
		logger.info('RESULT ', result)

		return result
	} catch (error) {
		throw error
	}
}

module.exports = { execute }
