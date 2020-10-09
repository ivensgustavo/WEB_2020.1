import React, {Component} from 'react';

import './App.css'

import { Provider } from 'react-redux';

import store from './components/store/';

import Numeros from './components/Numeros/'
import Soma from './components/Soma';
import Multiplicação from './components/Multiplicacao';
import Maior from './components/Maior';

export default class App extends Component {

  render(){
    return (
      <Provider store = {store} className='container'>
        <div className="line">
            <h1>REDUX CALC</h1>
        </div>
        <div className="line">
          <Numeros />
        </div>
        <div className="line">
          <Soma />
          <Multiplicação />
          <Maior />
        </div>
      </Provider>
    )
  }
}