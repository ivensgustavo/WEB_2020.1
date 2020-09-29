import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Firebase from './utils/Firebase';
import FirebaseContext from './utils/FirebaseContext';

ReactDOM.render(
  <FirebaseContext.Provider value = {new Firebase()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);


