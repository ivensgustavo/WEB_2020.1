import React, { Component } from 'react' 
import { Link } from 'react-router-dom';
import DisciplinaService from '../services/DisciplinaService';

export default class TableRow extends Component {

  constructor(props){
    super(props);
    this.apagarDisciplina = this.apagarDisciplina.bind(this);
  }

  apagarDisciplina(id, nome){

    const res = window.confirm(`Deseja realmente apagar ${nome}?`);

    if(res){
      DisciplinaService.delete(
        this.props.firebase,
        id,
        (ok) => {
          if(ok) console.log(`Disciplina ${nome} apagada`);
        }
      );
    } 

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
            onClick = {() => this.apagarDisciplina(
              this.props.disciplina._id,
              this.props.disciplina.nome
            )}
          >Apagar</button>
        </td>
      </tr>
    )
  }
}