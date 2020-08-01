import React from 'react';

export default (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src = {props.img} alt = {'Imagem ' + props.imageAlt}  width = {250}/>
    </div>
  )
}