import React, {Component} from 'react';

import MeusDados from './MeusDados';

export default class Pai extends Component {
  render(){
    return (
      <div>
        <h5>Questão 04</h5>

        <MeusDados 
          nome='Gustavo Ivens'
          curso='Engenharia de Software'
          cidade='São Benedito - CE'
        />
      </div>
    )
  }
}