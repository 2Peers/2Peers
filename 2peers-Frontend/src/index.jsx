import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import TwoPeersProvider from './context/TwoPeersProvider';

ReactDOM.render(
  <TwoPeersProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TwoPeersProvider>,
  document.getElementById('root'),
);
