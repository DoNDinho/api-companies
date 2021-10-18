const companySchema = {
	type: 'object',
	properties: {
		data: {
			type: 'object',
			properties: {
				company: {
					type: 'object',
					properties: {
						company_identification: {
							type: 'object',
							properties: {
								number: {
									type: 'string',
									pattern: '^([0-9])*$',
									minLength: 1
								},
								validator: {
									type: 'string',
									minLength: 1,
									maxLength: 1
								}
							},
							required: ['number', 'validator']
						},
						company_data: {
							type: 'object',
							properties: {
								name: {
									type: 'string',
									minLength: 1
								},
								email: {
									type: 'string',
									minLength: 1
								},
								phone: {
									type: 'integer',
									minimum: 8
								}
							},
							required: ['name', 'email', 'phone']
						},
						company_address: {
							type: 'object',
							properties: {
								street: {
									type: 'string',
									minLength: 1
								},
								number: {
									type: 'string',
									minLength: 1,
									pattern: '^([0-9])*$'
								},
								commune: {
									type: 'object',
									properties: {
										code: {
											type: 'integer',
											minimum: 1
										}
									},
									required: ['code']
								}
							},
							required: ['street', 'number', 'commune']
						},
						company_category: {
							type: 'object',
							properties: {
								code: {
									type: 'integer',
									minimum: 1
								}
							},
							required: ['code']
						}
					},
					required: ['company_identification', 'company_data', 'company_address', 'company_category']
				}
			},
			required: ['company']
		}
	},
	required: ['data']
};

module.exports = companySchema;
