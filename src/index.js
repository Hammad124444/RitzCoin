import React from 'react';
import { Web3ReactProvider } from "@web3-react/core";

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Component/Home';
import reportWebVitals from './reportWebVitals';
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider);
}


ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Home />
  </Web3ReactProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
