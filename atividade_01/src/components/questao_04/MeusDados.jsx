import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class MeusDados extends Component {
  render(){
    return (
      <div class="card">
        
        <div class="card-body">
          <h5 class="card-title">{this.props.nome}</h5>
            <p class="card-text">Curso: {this.props.curso}</p>
            <p class="card-text">Cidade: {this.props.cidade}</p>
        </div>
    </div>
    )
  }
}