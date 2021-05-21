import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { WordProvider } from './wordProvider';

ReactDOM.render(
  <WordProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </WordProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
