// @flow
import React, { Component } from 'react';
import type { Page, PageConfig, PageProps } from './Page';

class DashboardPageComponent extends Component implements Page {
  props: PageProps;

  static config: PageConfig = {
    path: '/',
    title: 'Dashboard',
    primary: true,
  };

  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

export default DashboardPageComponent;
