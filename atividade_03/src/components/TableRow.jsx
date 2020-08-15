import React, { Component } from 'react' 
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class TableRow extends Component {

  constructor(props){
    super(props);
    this.apagarDisciplina = this.apagarDisciplina.bind(this);
  }

  apagarDisciplina(){
    axios.delete(`http://localhost:3002/disciplinas/${this.props.disciplina.id}`)
    .then(
      (response) => {
        console.log('Disciplina apagada.')
        this.props.apagarDisciplinaPorId(this.props.disciplina.id);
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
          {this.props.disciplina.id}
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
            to = {`edit/${this.props.disciplina.id}`}
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