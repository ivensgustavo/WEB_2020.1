import React from 'react';
import Arena from './Arena';
import World from './World';
import personagens from '../../config/personagens'

export default () => {
  return (
    <div>
      <h3>Questão 03</h3>
      <World>
        <Arena 
          numero = {1} 
          hero = {personagens.HomemAranha} 
          enemy = {personagens.Venon} />
        <Arena 
          numero = {2} 
          hero = {personagens.LanternaVerde} 
          enemy = {personagens.Sinestro} />
        <Arena 
          numero = {3} 
          hero = {personagens.HomemDeFerro} 
          enemy = {personagens.Thanos} />
      </World>
    </div>
  );
}