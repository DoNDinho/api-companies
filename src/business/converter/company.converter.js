'use strict'
const parseCompanyResponse = (company) => {
	return {
		id: company.ID_EMPRESA || company.P_ID_EMPRESA,
		company_identification: {
			number: company.RUT_EMPRESA || company.P_RUT_EMPRESA,
			validator: company.DV_RUT || company.P_DV_RUT.trim()
		},
		company_data: {
			name: company.NOMBRE_EMPRESA || company.P_NOMBRE_EMPRESA,
			email: company.EMAIL_EMPRESA || company.P_EMAIL_EMPRESA,
			phone: company.TELEFONO_EMPRESA || company.P_TELEFONO_EMPRESA
		},
		company_address: {
			city: company.CIUDAD || company.P_CIUDAD,
			street: company.DIRECCION || company.P_DIRECCION
		}
	}
}

module.exports = { parseCompanyResponse }
