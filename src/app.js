'use strict';
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.resolve(__dirname, './api/swagger.yaml'));
require('dotenv').config();
const bodyParser = require('body-parser');
global.logger = require('./business/utils/configs/log4js.config');
const healthRoute = require('./client/routes/health');
const companyRoutes = require('./client/routes/company.routes');
const categoryRoutes = require('./client/routes/category.routes');
const contractRoutes = require('./client/routes/contract.routes');
const paymentRoutes = require('./client/routes/payment.routes');
const checklistRoutes = require('./client/routes/checklist.routes');
const { errorHandler } = require('./client/middlewares/error-handler/error-handler');
const port = process.env.PORT;

const app = express();

// Configurando middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurando rutas
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(healthRoute);
app.use(companyRoutes);
app.use(categoryRoutes);
app.use(contractRoutes);
app.use(paymentRoutes);
app.use(checklistRoutes);
app.use(async (err, req, res, next) => {
	await errorHandler(err, res);
});

// Iniciando servidor
app.listen(port, () => {
	logger.info('Servidor en puerto', port);
});
