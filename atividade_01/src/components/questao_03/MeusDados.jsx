import React from 'react';

export default (props) => {
  return (
    <div>
      <h6>Nome: {props.nome}</h6>
      <h6>Curso: {props.curso}</h6>
      <h6>Cidade: {props.cidade}</h6>
    </div>
  )
}