function setNumero1(numero){
  return {
    type: 'SET_NUMERO_01',
    numero
  }
}

function setNumero2(numero){
  return {
    type: 'SET_NUMERO_02',
    numero
  }
}

export {setNumero1, setNumero2};