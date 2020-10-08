import React, {Component} from 'react';

import Card from './Card';

export default class Maior extends Component {

  getMaior(){
    return this.props.numeros.numero1 > this.props.numeros.numero2 
      ? this.props.numeros.numero1 
      : this.props.numeros.numero2;
  }

  render(){
    return (
      <Card title='Maior'>
        <h2>{this.getMaior()}</h2>
      </Card>
    )
  }
}