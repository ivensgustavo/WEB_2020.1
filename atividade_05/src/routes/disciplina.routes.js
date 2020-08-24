const express = require('express');
const disciplinaRouter = express.Router();
const disciplinaService = require('../services/DisciplinaService');

disciplinaRouter.get('/', (request, response) => {
  return response.json(disciplinaService.listarDisciplinas())
})

disciplinaRouter.post('/', (request, response) => {
  const disciplina = disciplinaService.criarDisciplina(request.body);
  return response.json(disciplina);
})

disciplinaRouter.put('/:id', (request, response) => {
  const id = request.params.id;
  const disciplina = disciplinaService.editarDisciplina(id, request.body);
  return response.json(disciplina);
})

disciplinaRouter.delete('/:id', (request, response) => {
  const id = request.params.id;
  const ok = disciplinaService.excluirDisciplina(id);

  if(ok) return response.json({sucess: true});
  else return response.json({sucess: false});
})

disciplinaRouter.get('/:id', (request, response) => {
  const id = request.params.id;
  const disciplina = disciplinaService.retrieve(id);
  return response.json(disciplina);
})

module.exports = disciplinaRouter;