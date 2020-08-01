import React from 'react';

import personagens from '../../config/personagens';

export default (props) => {
  return (
    <div className = 'd-flex flex-column align-items-center container_personagem'>
      <h3>{personagens.Venon.name} da arena {props.arena}</h3>
      <img 
       src = {personagens.Venon.img}
       alt = {'Imagem ' + personagens.Venon.name}
       width = {250}
      />
    </div>
  );
}