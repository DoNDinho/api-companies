const { formatDate } = require('../utils/date');

const paymentConverter = (payment) => {
	return {
		id: payment.ID_PAGO,
		contract: {
			code: payment.ID_CONTRATO
		},
		total_amount: {
			amount: payment.TOTALPAGAR
		},
		payment_date: formatDate(payment.FECHAPAGO),
		expiration_date: formatDate(payment.FECHAVENCIMIENTO),
		state: {
			code: payment.ID_ESTADO_PAGO,
			description: payment.DESCRIPCION_PAGO
		}
	};
};

module.exports = { paymentConverter };
