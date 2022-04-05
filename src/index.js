import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './containers/App'
import 'tachyons'
import {robots} from './robots'
import reportWebVitals from './reportWebVitals';

ReactDom.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
