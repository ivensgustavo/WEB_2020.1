import React from 'react';

import personagens from '../../config/personagens';

export default (props) => {
  return (
    <div className = 'd-flex flex-column align-items-center container_personagem'>
      <h3>{personagens.HomemAranha.name} da arena {props.arena}</h3>
      <img 
       src = {personagens.HomemAranha.img}
       alt = {'Imagem ' + personagens.HomemAranha.name}
       width = {250}
      />
    </div>
  );
}