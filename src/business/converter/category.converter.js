const categoryConverter = (category) => {
	return {
		code: category.ID_RUBRO,
		description: category.DESCRIPCION,
		amount: category.MONTO
	};
};

module.exports = { categoryConverter };
