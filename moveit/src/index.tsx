import React from 'react'; // core da biblioteca react
import ReactDOM from 'react-dom'; // react trabalhando com a árvore de elementos do html
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
