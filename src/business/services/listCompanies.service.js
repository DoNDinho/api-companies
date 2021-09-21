'use strict'
const companiesRepository = require('../../data/repository/companies.repository')
const listCompanyConverter = require('../converter/listCompanies.converter')

const execute = async () => {
	try {
		const listCompanies = await getListCompanies()
		return await listCompanyConverter.parseListCompanyResponse(listCompanies)
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
