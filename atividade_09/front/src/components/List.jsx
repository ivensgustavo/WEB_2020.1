import React, {Component} from 'react';
import TableHow from './TableRow';
import FirebaseContext from '../utils/FirebaseContext';
import DisciplinaService from '../services/DisciplinaService';

//Passando o contexto(instância única do firebase) para a classe list
const ListPage = () => {
  return <FirebaseContext.Consumer>
    {
      (context) => <List firebase = {context}/>
    }
  </FirebaseContext.Consumer>
}

export class List extends Component {

  constructor(props){
    super(props);
    this._isMounted = false;
    this.state = {disciplinas: []}
    this.apagarDisciplinaPorId = this.apagarDisciplinaPorId.bind(this);
  }

  //Assim que a página carregar pegue a instância do firebase e acesse a coleção
  //disciplinas. Se outra aplicação alterar o banco ocorre atualização aqui também(onSnapShot)
  componentDidMount(){
    this._isMounted = true;

    DisciplinaService.list(this.props.firebase, 
      //recebo aquilo de que dependo
      (disciplinas) => {
        if(disciplinas){
          if(this._isMounted) this.setState({disciplinas: disciplinas})
        } 
      })
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  montarTabela(){
    if(!this.state.disciplinas) return;

    return this.state.disciplinas.map((disciplina) => {
      return <TableHow disciplina = {disciplina} 
              key = {disciplina._id} 
              apagarDisciplinaPorId = {this.apagarDisciplinaPorId}
              firebase = {this.props.firebase}/>;
    })
  }

  apagarDisciplinaPorId(id){
    const disciplinasFiltradas = this.state.disciplinas.filter((disciplina) => {
      return disciplina._id !== id;
    });

    this.setState({disciplinas: disciplinasFiltradas});
  }

  render(){
    return (
      <div>
        <p>Disciplinas cadastradas</p>
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

export default ListPage;