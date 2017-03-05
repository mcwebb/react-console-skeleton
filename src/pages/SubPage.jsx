// @flow
import React, { Component } from 'react';
import type { Page, PageProps } from './Page';

class SubPageComponent extends Component implements Page {
  props: PageProps;

  render() {
    return (
      <div>
        <h4>This is SubPage ({this.props.match.url})</h4>
      </div>
    );
  }
}

export default SubPageComponent;
