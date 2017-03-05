// @flow
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import logo from './logo.svg';
import './App.scss';

class AppComponent extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Client Skeleton!</h2>
        </div>
        <Link to="/">Home</Link>
        <Link to="/sub">SubPage</Link>
        <Route path="/" component={HomePage} />
      </div>
    );
  }
}

export default AppComponent;
