import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import './scss/main.scss';

import Modal from "react-modal";

import App from './App';

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
