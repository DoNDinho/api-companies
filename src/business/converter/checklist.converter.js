const checklistConverter = (checklist) => {
	return {
		id: checklist.ID_CHECKLIST,
		description: checklist.DESCRIPCION,
		status: checklist.ESTADO == '0' ? false : true,
		year: checklist.AÑO,
		month: checklist.MES
	};
};

module.exports = { checklistConverter };
