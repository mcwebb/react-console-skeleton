// @flow
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SubPage from './SubPage';
import type { Page, PageProps } from './Page';

class HomePageComponent extends Component implements Page {
  props: PageProps;

  render() {
    return (
      <div>
        <h3>This is Home ({this.props.match.url})</h3>
        <Route path={`${this.props.match.url}sub`} component={SubPage} />
      </div>
    );
  }
}

export default HomePageComponent;
