const express = require('express');
const disciplinaRouter = express.Router();
const disciplinaService = require('../services/DisciplinaService');

disciplinaRouter.get('/', (request, response) => {
  disciplinaService.listarDisciplinas(request, response);
})

disciplinaRouter.post('/', (request, response) => {
   disciplinaService.criarDisciplina(request, response);
})

disciplinaRouter.put('/:id', (request, response) => {
  disciplinaService.editarDisciplina(request, response);
})

disciplinaRouter.delete('/:id', (request, response) => {
  disciplinaService.excluirDisciplina(request, response);
})

disciplinaRouter.get('/:id', (request, response) => {
  disciplinaService.retrieve(request, response);
})

module.exports = disciplinaRouter;