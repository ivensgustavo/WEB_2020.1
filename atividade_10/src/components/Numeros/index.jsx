import React, { Component } from 'react';

import { connect } from 'react-redux';

import Card from '../Card';

import {setNumero1, setNumero2} from '../store/actions';

import './Numeros.css'

class Numeros extends Component {

  render() {
    console.log(this.props)
    return (
      <div className = 'container_numeros'>
        <Card title='Número 01'>
          <input
            value={this.props.numeros.numero1}
            onChange = {(event) => {
              this.props.dispatch(setNumero1(Number(event.target.value)))
            }}
          />
        </Card>

        <Card title='Número 02'>
          <input
            value={this.props.numeros.numero2}
            onChange = {(event) => {
              this.props.dispatch(setNumero2(Number(event.target.value)))
            }}
          />
        </Card>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    numeros: state
  }
})(Numeros)