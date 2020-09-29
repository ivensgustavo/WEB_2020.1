const mongoose = require('mongoose');

//quais dados vão formar as tuplas, o formato dos documentos
const DisciplinaSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
    max: 100
  },
  curso: {
    type: String,
    required: true,
    max: 100
  },
  capacidade: {
    type: Number,
    required: true
  }
});


//criando a collection que gaurdada os documentos com o formato definido acima
const DisciplinaModel = mongoose.model('disciplinas', DisciplinaSchema);

module.exports = DisciplinaModel;