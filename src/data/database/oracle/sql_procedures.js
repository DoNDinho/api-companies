'use strict';
const oracledb = require('oracledb');

const insertCompany = (company) => {
	const { number, validator } = company.company_identification;
	const { name, email, phone } = company.company_data;
	const { street, number: numberStreet } = company.company_address;
	const { code } = company.company_address.commune;

	return {
		name: 'SP_INSERTAR_EMPRESA',
		statement: `BEGIN SP_INSERTAR_EMPRESA('${number}','${validator}','${name}','${email}', ${phone},'${street}', '${numberStreet}', ${code}, :P_CODIGO, :P_MENSAJE); END;`,
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
		statement: `BEGIN SP_LISTAR_EMPRESA_POR_ID(:P_ID_EMPRESA, :P_RUT, :P_DV, :P_NOMBRE, :P_EMAIL, :P_TELEFONO, :P_DIRECCION, :P_NUM_CALLE, :P_ID_COMUNA, :P_DESCRIPCION, :P_CODIGO, :P_MENSAJE); END;`,
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
			P_DESCRIPCION: { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
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

	return {
		name: 'SP_MODIFICAR_EMPRESA',
		statement: `BEGIN SP_MODIFICAR_EMPRESA(:P_ID_EMPRESA, :P_RUT, :P_DV, :P_NOMBRE, :P_EMAIL, :P_TELEFONO, :P_DIRECCION, :P_NUM_CALLE, :P_ID_COMUNA, :P_CODIGO, :P_MENSAJE); END;`,
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

module.exports = { insertCompany, getListCompanies, getCompanyById, updateCompany, getCategories };
