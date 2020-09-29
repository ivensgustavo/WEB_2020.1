export default class DisciplinaService {

  //calback é uma função que "liga" duas funções quando há uma dependência
  static list(firebase, callback) {
    const refFireBase = firebase.getFirestore().collection('disciplinas');
    refFireBase.onSnapshot(
      (query) => {
        let disciplinas = [];
        query.forEach((documento) => {
          const { nome, curso, capacidade } = documento.data();
          disciplinas.push({
            _id: documento.id,
            nome,
            curso,
            capacidade
          });
        });

        //Passo aquilo que quem depende precisa
        callback(disciplinas);
      }
    )
  }

  static create(firebase, disciplina, callback){
    const refFirebase = firebase.getFirestore().collection('disciplinas');

      refFirebase.add(disciplina)
      .then(
        (response) => {
          callback(true);
      })
      .catch(
        (error) => {
          callback(false);
        }
      )
  }

  static delete(firebase, id, callback) {
    const refFirebase = firebase.getFirestore().collection('disciplinas');

    refFirebase.doc(id).delete()
      .then(
        () => {
          callback(true);
      })
      .catch(
        (error) => {
          callback(false);
      })
  }

  static retrieve(firebase, id, callback){
    const refFirebase = firebase.getFirestore().collection('disciplinas');

    refFirebase.doc(id).get()
    .then(
      (documento) => {
        const {nome, curso, capacidade} = documento.data();
        const disciplina = {
          nome,
          curso,
          capacidade
        }

        callback(disciplina);
    })
    .catch(
        (error) => {
          callback(null);
        }
    )
  }

  static update(firebase, id, disciplinaEditada, callback){
    const refFirebase = firebase.getFirestore().collection('disciplinas');

    refFirebase.doc(id).set(disciplinaEditada)
    .then(
      (documento) => {
       callback(true);
    })
    .catch(
      (error) => {
        callback(false);
      }
    )
  }
}