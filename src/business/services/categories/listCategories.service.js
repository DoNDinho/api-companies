'use strict';
const categoriesRepository = require('../../../data/repository/categories.repository');
const categoryConverter = require('../../converter/category.converter');

const getCategories = async () => {
	try {
		const categories = await execute();
		return await Promise.all(
			categories.map((category) => categoryConverter.categoryConverter(category))
		);
	} catch (error) {
		throw error;
	}
};

const execute = async () => {
	try {
		const result = await categoriesRepository.getCategories();
		return result;
	} catch (error) {
		throw error;
	}
};

module.exports = { getCategories };
