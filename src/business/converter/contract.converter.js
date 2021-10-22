'use strict';
const parseContractResponse = (contract) => {
	return {
		id: contract.ID_CONTRATO || contract.P_ID_CONTRATO,
		company: {
			code: contract.ID_EMPRESA || contract.P_ID_EMPRESA,
			description: contract.NOMBRE || contract.P_NOMBRE
		},
		init_date: contract.FECHAINICIO || contract.P_FECHAINICIO,
		term_date: contract.FECHATERMINO || contract.P_FECHATERMINO,
		payment_date: contract.FECHAPAGO || contract.P_FECHAPAGO,
		description: contract.DESCRIPCION || contract.P_DESCRIPCION,
		base_amount: {
			amount: contract.MONTOBASE || contract.P_MONTOBASE
		},
		state: {
			code: contract.ID_ESTADO || contract.P_ID_ESTADO,
			description: contract.DESCRIPCION_ESTADO_CONTRATO || contract.P_DESCRIPCION_ESTADO_CONTRATO
		}
	};
};

module.exports = { parseContractResponse };
