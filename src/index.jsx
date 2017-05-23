// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import routes from './routes';
import './index.scss';

const eRoot = (
  <BrowserRouter>
    <App routes={routes} />
  </BrowserRouter>
);

ReactDOM.render(eRoot, document.getElementById('root'));
