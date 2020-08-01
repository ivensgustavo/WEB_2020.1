import React from 'react';

import Hero from '../questao_02/Hero';
import Enemy from '../questao_02/Enemy';

export default ({numero, hero, enemy}) => {
  return (
    <div className="arena">
      <div className="jumbotron ">

        <h1 className="display-4">Arena {numero}</h1>
        <hr className="my-4"/>

        <div className="d-flex flex-row justify-content-center align-items-center ">
          <Hero 
            name = {hero.name} 
            img = {hero.img} 
          />

          <span className = "versus"> X </span>

          <Enemy
            name = {enemy.name} 
            img = {enemy.img}
          />

        </div>
      </div>
    </div>
  );
}