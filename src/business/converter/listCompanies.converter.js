'use strict'
const parseListCompanyResponse = async (listCompanies) => {
	return {
		data: {
			companies: await Promise.all(
				listCompanies.map((company) => ({
					id: company.ID_EMPRESA,
					company_identification: {
						number: company.RUT_EMPRESA,
						validator: company.DV_RUT
					},
					company_data: {
						name: company.NOMBRE_EMPRESA,
						email: company.EMAIL_EMPRESA,
						phone: company.TELEFONO_EMPRESA
					},
					company_address: {
						city: company.CIUDAD,
						street: company.DIRECCION
					}
				}))
			)
		}
	}
}

module.exports = { parseListCompanyResponse }
