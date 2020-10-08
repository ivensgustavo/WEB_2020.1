import React, {Component} from 'react';

import Card from './Card';

export default class Multiplicacao extends Component {

  render(){
    return (
      <Card title='Multiplicação'>
        <h2>{this.props.numeros.numero1 * this.props.numeros.numero2}</h2>
      </Card>
    )
  }
}