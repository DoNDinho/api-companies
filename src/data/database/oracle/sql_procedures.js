'use strict';
const oracledb = require('oracledb');

const insertCompany = (company) => {
	const { number, validator } = company.company_identification;
	const { name, email, phone } = company.company_data;
	const { street, number: numberStreet } = company.company_address;
	const { code } = company.company_address.commune;
	const { code: codeCategory } = company.company_category;

	return {
		name: 'SP_INSERTAR_EMPRESA',
		statement: `BEGIN SP_INSERTAR_EMPRESA('${number}','${validator}','${name}','${email}', ${phone},'${street}', '${numberStreet}', ${code}, ${codeCategory}, :P_CODIGO, :P_MENSAJE); END;`,
		bind: {
			P_CODIGO: { dir: oracledb.BIND_OUT },
			P_MENSAJE: { dir: oracledb.BIND_OUT }
		}
	};
};

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
	};
};

const getCompanyById = (id) => {
	return {
		name: 'SP_LISTAR_EMPRESA_POR_ID',
		statement: `BEGIN SP_LISTAR_EMPRESA_POR_ID(:P_ID_EMPRESA, :P_RUT, :P_DV, :P_NOMBRE, :P_EMAIL, :P_TELEFONO, :P_DIRECCION, :P_NUM_CALLE, :P_ID_COMUNA, :P_DESCRIPCION_COMUNA, :P_ID_RUBRO, :P_DESCRIPCION_RUBRO, :P_MONTO_RUBRO, :P_CODIGO, :P_MENSAJE); END;`,
		bind: {
			P_ID_EMPRESA: { val: parseInt(id), type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_INOUT },
			P_RUT: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_DV: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_NOMBRE: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_EMAIL: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_TELEFONO: { type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_OUT },
			P_DIRECCION: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_NUM_CALLE: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_ID_COMUNA: { type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_OUT },
			P_DESCRIPCION_COMUNA: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_ID_RUBRO: { type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_OUT },
			P_DESCRIPCION_RUBRO: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_MONTO_RUBRO: { type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_OUT },
			P_CODIGO: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_MENSAJE: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT }
		}
	};
};

const updateCompany = (id, company) => {
	const { number, validator } = company.company_identification;
	const { name, email, phone } = company.company_data;
	const { street, number: numberStreet } = company.company_address;
	const { code } = company.company_address.commune;
	const { code: codeCategory } = company.company_category;

	return {
		name: 'SP_MODIFICAR_EMPRESA',
		statement: `BEGIN SP_MODIFICAR_EMPRESA(:P_ID_EMPRESA, :P_RUT, :P_DV, :P_NOMBRE, :P_EMAIL, :P_TELEFONO, :P_DIRECCION, :P_NUM_CALLE, :P_ID_COMUNA, :P_ID_RUBRO, :P_CODIGO, :P_MENSAJE); END;`,
		bind: {
			P_ID_EMPRESA: { val: parseInt(id), type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_INOUT },
			P_RUT: { val: number, type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_INOUT },
			P_DV: { val: validator, type: oracledb.DB_TYPE_CHAR, dir: oracledb.BIND_INOUT },
			P_NOMBRE: { val: name, type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_INOUT },
			P_EMAIL: { val: email, type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_INOUT },
			P_TELEFONO: { val: phone, type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_INOUT },
			P_DIRECCION: { val: street, type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_INOUT },
			P_NUM_CALLE: { val: numberStreet, type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_INOUT },
			P_ID_COMUNA: { val: parseInt(code), type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_INOUT },
			P_ID_RUBRO: { val: codeCategory, type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_INOUT },
			P_CODIGO: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_MENSAJE: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT }
		}
	};
};

const getCategories = () => {
	return {
		name: 'SP_LISTAR_RUBROS',
		statement: `BEGIN SP_LISTAR_RUBROS(:P_RECORDSET, :P_COUNT, :P_CODIGO, :P_MENSAJE); END;`,
		bind: {
			P_RECORDSET: { type: oracledb.DB_TYPE_CURSOR, dir: oracledb.BIND_OUT },
			P_COUNT: { type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_OUT },
			P_CODIGO: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_MENSAJE: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT }
		}
	};
};

const insertContract = (contract) => {
	const idCompany = contract.company.code;
	const { init_date, payment_date, description, period } = contract;

	return {
		name: 'SP_INSERTAR_CONTRATO',
		statement: `BEGIN SP_INSERTAR_CONTRATO('${idCompany}','${init_date}','${payment_date}','${description}', ${period}, :P_CODIGO, :P_MENSAJE); END;`,
		bind: {
			P_CODIGO: { dir: oracledb.BIND_OUT },
			P_MENSAJE: { dir: oracledb.BIND_OUT }
		}
	};
};

const getContractById = (idContract, idCompany) => {
	return {
		name: 'SP_LISTAR_CONTRATO_POR_ID',
		statement: `BEGIN SP_LISTAR_CONTRATO_POR_ID(:P_ID_CONTRATO, :P_ID_EMPRESA, :P_NOMBRE, :P_FECHAINICIO, :P_FECHATERMINO, :P_FECHAPAGO, :P_DESCRIPCION, :P_ID_ESTADO, :P_DESCRIPCION_ESTADO_CONTRATO, :P_MONTOBASE, :P_CODIGO, :P_MENSAJE); END;`,
		bind: {
			P_ID_CONTRATO: {
				val: parseInt(idContract),
				type: oracledb.DB_TYPE_NUMBER,
				dir: oracledb.BIND_INOUT
			},
			P_ID_EMPRESA: {
				val: parseInt(idCompany),
				type: oracledb.DB_TYPE_NUMBER,
				dir: oracledb.BIND_INOUT
			},
			P_NOMBRE: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_FECHAINICIO: { type: oracledb.DB_TYPE_DATE, dir: oracledb.BIND_OUT },
			P_FECHATERMINO: { type: oracledb.DB_TYPE_DATE, dir: oracledb.BIND_OUT },
			P_FECHAPAGO: { type: oracledb.DB_TYPE_DATE, dir: oracledb.BIND_OUT },
			P_DESCRIPCION: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_ID_ESTADO: { type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_OUT },
			P_DESCRIPCION_ESTADO_CONTRATO: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_MONTOBASE: { type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_OUT },
			P_CODIGO: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_MENSAJE: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT }
		}
	};
};

const getContracts = (idCompany) => {
	return {
		name: 'SP_LISTAR_CONTRATOS_EMPRESA',
		statement: `BEGIN SP_LISTAR_CONTRATOS_EMPRESA(:P_ID_EMPRESA, :P_RECORDSET, :P_COUNT, :P_CODIGO, :P_MENSAJE); END;`,
		bind: {
			P_ID_EMPRESA: {
				val: parseInt(idCompany),
				type: oracledb.DB_TYPE_NUMBER,
				dir: oracledb.BIND_INOUT
			},
			P_RECORDSET: { type: oracledb.DB_TYPE_CURSOR, dir: oracledb.BIND_OUT },
			P_COUNT: { type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_OUT },
			P_CODIGO: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_MENSAJE: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT }
		}
	};
};

const getPayments = (idCompany) => {
	return {
		name: 'SP_LISTAR_PAGOS_EMPRESA',
		statement: `BEGIN SP_LISTAR_PAGOS_EMPRESA(:P_ID_EMPRESA, :P_RECORDSET, :P_COUNT, :P_CODIGO, :P_MENSAJE); END;`,
		bind: {
			P_ID_EMPRESA: {
				val: parseInt(idCompany),
				type: oracledb.DB_TYPE_NUMBER,
				dir: oracledb.BIND_INOUT
			},
			P_RECORDSET: { type: oracledb.DB_TYPE_CURSOR, dir: oracledb.BIND_OUT },
			P_COUNT: { type: oracledb.DB_TYPE_NUMBER, dir: oracledb.BIND_OUT },
			P_CODIGO: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
			P_MENSAJE: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT }
		}
	};
};

module.exports = {
	insertCompany,
	getListCompanies,
	getCompanyById,
	updateCompany,
	getCategories,
	insertContract,
	getContractById,
	getContracts,
	getPayments
};
