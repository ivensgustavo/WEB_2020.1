import React from 'react';

import Questao01 from './components/questao_01/Arena';
import Questao02 from './components/questao_02/Arena';
import Questao03 from './components/questao_03/index';
import Questao04 from './components/questao_04/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


function App() {
  return (
    <div className = 'd-flex flex-column'>
      <Questao01 />
      <Questao02 />
      <Questao03 />
      <Questao04 />
    </div>
  );
}

export default App;
