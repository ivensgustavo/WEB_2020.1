import React, {Component} from 'react';

import { connect } from 'react-redux';

import Card from './Card';

class Soma extends Component {

  render(){
    return (
      <Card title='Soma'>
        <h2>{this.props.numeros.numero1 + this.props.numeros.numero2}</h2>
      </Card>
    )
  }
}

export default connect((state) => {
  return {
    numeros: state
  }
})(Soma);