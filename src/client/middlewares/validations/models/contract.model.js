const contractSchema = {
	type: 'object',
	properties: {
		data: {
			type: 'object',
			properties: {
				contract: {
					type: 'object',
					properties: {
						company: {
							type: 'object',
							properties: {
								code: {
									type: 'integer',
									minimum: 1
								}
							},
							required: ['code']
						},
						init_date: {
							type: 'string',
							minLength: 1
						},
						payment_date: {
							type: 'string',
							minLength: 1
						},
						description: {
							type: 'string',
							minLength: 1
						},
						period: {
							type: 'integer',
							minimum: 1
						}
					},
					required: ['company', 'init_date', 'period']
				}
			},
			required: ['contract']
		}
	},
	required: ['data']
};

module.exports = contractSchema;
