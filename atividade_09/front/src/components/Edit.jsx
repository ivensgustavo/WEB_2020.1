import React, { Component } from 'react';
import FirebaseContext from '../utils/FirebaseContext';
import DisciplinaService from '../services/DisciplinaService';

//Passando o contexto(instância única do firebase) para a classe Create
//e o id da disciplina
const EditPage = (props) => {
  
  return <FirebaseContext.Consumer>
    {
      (context) => <Edit firebase = {context} id = {props.match.params.id}/>
    }
  </FirebaseContext.Consumer>
}

class Edit extends Component {

  constructor(props){
    super(props)
    this.state = {nome: '', curso: '', capacidade: ''};

    this.setNome = this.setNome.bind(this);
    this.setCurso = this.setCurso.bind(this);
    this.setCapacidade = this.setCapacidade.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    DisciplinaService.retrieve(
      this.props.firebase,
      this.props.id,
      (disciplina) => {
        if(disciplina){
          this.setState({
            nome: disciplina.nome,
            curso: disciplina.curso,
            capacidade: disciplina.capacidade
          });
        }
      }
    );
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
  
    const disciplinaEditada = {
       nome: this.state.nome,
       curso: this.state.curso,
       capacidade: this.state.capacidade
     }

    DisciplinaService.update(
      this.props.firebase,
      this.props.id,
      disciplinaEditada,
      (res) => {
        if(res) 
          console.log(`Disciplina ${disciplinaEditada.nome} atualizada com sucesso.`)
      }
    )
    
    this.setState({nome: '', curso: '', capacidade: ''})
  }

  render(){
    return (
      <div>
        <h3>Editar Disciplina</h3>

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
            <input type="submit" value="Editar Disciplina" className="btn btn-primary"/>
          </div>

        </form>
      </div>
    );
  }
}

export default EditPage;