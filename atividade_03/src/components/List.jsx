import React, {Component} from 'react';
import axios from 'axios';

import TableHow from './TableRow';

export default class List extends Component {

  constructor(props){
    super(props);
    this.state = {disciplinas: []}
    this.apagarDisciplinaPorId = this.apagarDisciplinaPorId.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhost:3002/disciplinas')
    .then(
      (response) => {
        this.setState({disciplinas: response.data});
    })
    .catch(
        (error) => {
          console.log(error);
        }
    )
  }

  montarTabela(){
    if(!this.state.disciplinas) return;

    return this.state.disciplinas.map((disciplina) => {
      return <TableHow disciplina = {disciplina} 
              key = {disciplina.id} 
              apagarDisciplinaPorId = {this.apagarDisciplinaPorId}/>;
    })
  }

  apagarDisciplinaPorId(id){
    const disciplinasFiltradas = this.state.disciplinas.filter((disciplina) => {
      return disciplina.id !== id;
    });

    this.setState({disciplinas: disciplinasFiltradas});
  }

  render(){
    return (
      <div>
        <p>Estudantes cadastrados</p>
        <table className = 'table table-striped' style = {{marginTop: 20}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>Capacidade</th>
              <th colSpan = {2}></th>
            </tr>
          </thead>
          <tbody>
            {this.montarTabela()}
          </tbody>
        </table>
      </div>
    );
  }
}