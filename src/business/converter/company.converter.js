'use strict';
const parseCompanyResponse = (company) => {
	return {
		id: company.ID_EMPRESA || company.P_ID_EMPRESA,
		company_identification: {
			number: company.RUT || company.P_RUT,
			validator: company.DV || company.P_DV.trim()
		},
		company_data: {
			name: company.NOMBRE || company.P_NOMBRE,
			email: company.EMAIL || company.P_EMAIL,
			phone: company.TELEFONO || company.P_TELEFONO
		},
		company_address: {
			street: company.DIRECCION || company.P_DIRECCION,
			number: company.NUM_CALLE || company.P_NUM_CALLE,
			commune: {
				code: company.ID_COMUNA || company.P_ID_COMUNA,
				description: company.DESCRIPCION_COMUNA || company.P_DESCRIPCION_COMUNA
			}
		},
		company_category: {
			code: company.ID_RUBRO || company.P_ID_RUBRO,
			description: company.DESCRIPCION_RUBRO || company.P_DESCRIPCION_RUBRO,
			amount: company.MONTO_RUBRO || company.P_MONTO_RUBRO
		}
	};
};

module.exports = { parseCompanyResponse };
