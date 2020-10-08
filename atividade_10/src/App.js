import React, {Component} from 'react';
import './App.css'

import Numeros from './components/Numeros/index'
import Soma from './components/Soma';
import Multiplicação from './components/Multiplicacao';
import Maior from './components/Maior';

export default class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {numeros: {
      numero1: 0,
      numero2: 0
    }}

    this.setNumeros = this.setNumeros.bind(this);
  }

  setNumeros(novosNumeros){
    this.setState({numeros: novosNumeros});
  }

  render(){
    return (
      <div className="container">
       <div className="line">
          <h1>REDUX CALC</h1>
       </div>
       <div className="line">
        <Numeros setNumeros = {this.setNumeros}/>
       </div>
       <div className="line">
         <Soma numeros = {this.state.numeros} />
         <Multiplicação numeros = {this.state.numeros} />
         <Maior numeros = {this.state.numeros} />
       </div>
      </div>
    )
  }
}