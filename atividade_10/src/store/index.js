import { createStore } from 'redux';

const initialState = {
  numero1: 0,
  numero2: 0,
}

function reducer(state = initialState, action){

  switch (action.type){
    case 'SET_NUMERO_01':
      return {
        ...state, 
        numero1: action.numero
      }
    case 'SET_NUMERO_02':
      return {
        ...state, 
        numero2: action.numero
      }
    
    default: return state;
  }
}

const store = createStore(reducer);

export default store;