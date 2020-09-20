const express = require('express');
const routes = express.Router()
const disciplinaRouter = require('../routes/disciplina.routes');


routes.use('/disciplinas', disciplinaRouter);
module.exports = routes;