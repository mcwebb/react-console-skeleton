// @flow
import React, { Component } from 'react';
import type { Page, PageConfig, PageProps } from './Page';

class SubPageComponent extends Component implements Page {
  props: PageProps;

  static config: PageConfig = {
    path: '/second/sub',
    title: 'Sub',
    primary: false,
  };

  render() {
    return (
      <div>
        SubPage
      </div>
    );
  }
}

export default SubPageComponent;
