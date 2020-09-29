import React, {Component} from 'react';

import FirebaseContext from '../utils/FirebaseContext';

//Passando o contexto(instância única do firebase) para a classe Create
const CreatePage = () => {
  
  return <FirebaseContext.Consumer>
    {
      (context) => <Create firebase = {context}/>
    }
  </FirebaseContext.Consumer>
}

class Create extends Component {

  constructor(props){
    super(props)

    this.state = {nome: '', curso: '', capacidade: ''};

    this.setNome = this.setNome.bind(this);
    this.setCurso = this.setCurso.bind(this);
    this.setCapacidade = this.setCapacidade.bind(this);


    
    this.onSubmit = this.onSubmit.bind(this);
  }

  setNome(e){
    this.setState({nome: e.target.value });
  }

  setCurso(e){
    this.setState({curso: e.target.value });
  }

  setCapacidade(e){
    this.setState({capacidade: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
      const {nome, curso, capacidade} = this.state;
    
      const refFirebase = this.props.firebase.getFirestore().collection('disciplinas');

      refFirebase.add({
        nome,
        curso,
        capacidade
      })
      .then(
        (response) => {
          console.log('Disciplina '+nome+' adicionada com sucesso.')
      })
      .catch(
        (error) => {
          console.log(error);
        }
      )
    
    this.setState({nome: '', curso: '', capacidade: ''})
  }

  render(){
    return (
      <div>
        <h3>Criar Disciplina</h3>

        <form onSubmit = {this.onSubmit}>

          <div className='form-group'>
            <label>Nome:</label>
            <input type = 'text' 
              className = 'form-control' 
              value = {this.state.nome}
              onChange = {this.setNome}
            />
          </div>
          <div className='form-group'>
            <label>Curso:</label>
            <input type = 'text' 
              className = 'form-control'
              value = {this.state.curso}
              onChange = {this.setCurso}
            />
          </div>
          <div className='form-group'>
            <label>Capacidade:</label>
            <input type = 'text' 
              className = 'form-control' 
              value = {this.state.capacidade}
              onChange = {this.setCapacidade}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Criar Disciplina" className="btn btn-primary"/>
          </div>

        </form>
      </div>
    );
  }
}

export default CreatePage;