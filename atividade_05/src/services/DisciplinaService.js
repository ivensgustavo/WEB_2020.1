const Disciplina = require('../models/Disciplina');

let disciplinas = [];
let id = 0;

class DisciplinaService {

  static criarDisciplina(data){
    const disciplina = new Disciplina(
      id++,
      data.nome,
      data.curso,
      data.capacidade
    );

    disciplinas.push(disciplina);

    return disciplina;
  }

  static listarDisciplinas(){
    return disciplinas;
  }

  static editarDisciplina(id, data){
    for(let d of disciplinas){
      if(d.id == id){
        d.nome = data.nome;
        d.curso = data.curso;
        d.capacidade = data.capacidade;
        return d;
      }
    }
    return null;
  }

  static excluirDisciplina(id){
    for(let i = 0; i < disciplinas.length; i++){
      if(disciplinas[i].id == id){
        disciplinas.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  static retrieve(id){
    for(let d of disciplinas){
      if(d.id == id) return d;
    }

    return {};
  }

}

module.exports = DisciplinaService;