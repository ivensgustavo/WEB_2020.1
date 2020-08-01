import React from 'react';
import Hero from './Hero';
import Enemy from './Enemy';
import {homem_aranha, venom} from '../../config/imagens';

export default (props) => {
  return (
    <div className = 'arena'>
     
      <div className ="jumbotron ">

        <h1 className ="display-4">Questão 01</h1>
        <hr className ="my-4"/>

        <div className="d-flex flex-row justify-content-center align-items-center ">
          <Hero name ="Homem Aranha" img = {homem_aranha} />
          <span className = "versus"> X </span>
          <Enemy name ="Venom" img = {venom} />
        </div>
        
      </div>
    </div>
  )
}