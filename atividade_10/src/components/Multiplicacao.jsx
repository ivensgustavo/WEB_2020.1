import React, {Component} from 'react';

import { connect } from 'react-redux';

import Card from './Card';

class Multiplicacao extends Component {

  render(){
    return (
      <Card title='Multiplicação'>
        <h2>{this.props.numeros.numero1 * this.props.numeros.numero2}</h2>
      </Card>
    )
  }
}

export default connect((state) => {
  return {
    numeros: state
  }
})(Multiplicacao);