const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

//conectando com o banco
const mongoDB_URI = 'mongodb://127.0.0.1:27017/crud_disciplinas';
mongoose.connect(mongoDB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

//armazenando a conexão
const db = mongoose.connection;

//se conectou
db.on('connected', () => {
  console.log("Conexão estabelecida: "+mongoDB_URI);
});

//se não conectou
db.on('disconnected', () => {
  console.log('Conexão encerrada:'+mongoDB_URI);
})

// se ocorreu algum erro
db.on('error', (err) => {
  console.log('Mongoose error:'+err);
})