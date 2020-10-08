import React, { Component } from 'react';

import './Numeros.css'

import Card from '../Card'

export default class Numeros extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      numeros: {
        numero1: 0,
        numero2: 0
      }
    }

    this.setNumero1 = this.setNumero1.bind(this);
    this.setNumero2 = this.setNumero2.bind(this);
  }

  setNumero1(event){
    this.setState({
      numeros:{
        numero1: Number(event.target.value),
        numero2: this.state.numeros.numero2
      }
    })
    console.log(this.state.numeros.numero1)

    this.props.setNumeros(this.state.numeros);
  }

  setNumero2(event){
    this.setState({
      numeros:{
        numero1: this.state.numeros.numero1,
        numero2: Number(event.target.value)
      }
    })
    this.props.setNumeros(this.state.numeros);
  }

  render() {
    return (
      <div className = 'container_numeros'>
        <Card title='Numero 01'>
          <input
            value={this.state.numeros.numero1}
            onChange={this.setNumero1}>
          </input>
        </Card>

        <Card title='Numero 02'>
          <input
            value={this.state.numeros.numero2}
            onChange={this.setNumero2}>
          </input>
         
        </Card>
      </div>
    )
  }
}