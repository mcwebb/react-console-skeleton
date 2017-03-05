// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.scss';

const eRoot = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(eRoot, document.getElementById('root'));
