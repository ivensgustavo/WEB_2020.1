import React, { Component } from 'react' 
import { Link } from 'react-router-dom';
import api from '../services/api';

export default class TableRow extends Component {

  constructor(props){
    super(props);
    this.apagarDisciplina = this.apagarDisciplina.bind(this);
  }

  apagarDisciplina(){
    api.delete(`disciplinas/${this.props.disciplina._id}`)
    .then(
      (response) => {
        console.log('Disciplina apagada.')
        this.props.apagarDisciplinaPorId(this.props.disciplina._id);
    })
    .catch(
      (error) =>{
        console.log(error);
    })
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.disciplina._id}
        </td>
        <td>
          {this.props.disciplina.nome}
        </td>
        <td>
          {this.props.disciplina.curso}
        </td>
        <td>
          {this.props.disciplina.capacidade}
        </td>
        <td>
          <Link 
            to = {`edit/${this.props.disciplina._id}`}
            className = 'btn btn-primary'>Editar</Link>
        </td>
        <td>
          <button 
            className = 'btn btn-danger'
            onClick = {() => this.apagarDisciplina()}
          >Apagar</button>
        </td>
      </tr>
    )
  }
}