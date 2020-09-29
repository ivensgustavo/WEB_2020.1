const DisciplinaModel = require('../models/Disciplina');

class DisciplinaService {

  static criarDisciplina(request, response){
    DisciplinaModel.create(request.body)
    .then((disciplina) =>{
      return response.status(201).json(disciplina);
    })
    .catch((err) => {
      return response.status(500).json(err);
    })
  }

  static listarDisciplinas(request, response){
    DisciplinaModel.find()
    .then((disciplinas) => {
      return response.json(disciplinas);
    })
    .catch((err) => {
      return response.status(500).json(err);
    })
  }

  static editarDisciplina(request, response){
    // o 'new': true é para retornar o objeto modificado
    DisciplinaModel.findByIdAndUpdate(
      request.params.id, 
      request.body,
      {'new': true})
      .then((disciplina) => {
        return response.json(disciplina);
      })
      .catch((err) => {
        return response.status(500).json(err);
      })
  }

  static excluirDisciplina(request, response){
    DisciplinaModel.findByIdAndDelete(request.params.id)
    .then((disciplina) => {
      return response.json(disciplina);
    })
    .catch((err) => {
      return response.status(500).json(err);
    })
  }

  static retrieve(request, response){
   DisciplinaModel.findById(request.params.id)
   .then((disciplina) => {
    return response.json(disciplina);
  })
  .catch((err) => {
    return response.status(500).json(err);
  })
  }

}

module.exports = DisciplinaService;