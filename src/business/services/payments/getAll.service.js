'use strict';
const paymentsRepository = require('../../../data/repository/payments.repository');
const paymentConverter = require('../../converter/payment.converter');

const getPayments = async (idCompany, query) => {
	try {
		const payments = await execute(idCompany);
		const filteredPayments = filterPayments(payments, query);
		return await Promise.all(
			filteredPayments.map((payment) => paymentConverter.paymentConverter(payment))
		);
	} catch (error) {
		throw error;
	}
};

// TODO validar existencia de empresa
const execute = async (idCompany) => {
	try {
		const result = await paymentsRepository.getPayments(idCompany);
		return result;
	} catch (error) {
		throw error;
	}
};

const filterPayments = (payments, query) => {
	const { id_contract } = query;
	let filteredPayments = payments;

	if (id_contract) {
		filteredPayments = payments.filter((payment) => payment.ID_CONTRATO == id_contract);
	}

	return filteredPayments;
};

module.exports = { getPayments };
