import React from 'react';
import {lanterna_verde, sinestro} from '../../config/imagens';
import Hero from './Hero';
import Enemy from './Enemy';

export default () => {
  return (

    <div className="arena">
      <div className="jumbotron ">

        <h1 className="display-4">Questão 02</h1>
        <hr className="my-4"/>

        <div className="d-flex flex-row justify-content-center align-items-center ">
          <Hero 
            name = 'Lanterna Verde' 
            img = {lanterna_verde}  
            />

          <span className = "versus"> X </span>

          <Enemy
            name = 'Sinestro' 
            img = {sinestro} 
          />

        </div>
      </div>
    </div>
  )
}

