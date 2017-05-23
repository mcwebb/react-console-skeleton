// @flow
import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import type { Page, PageConfig, PageProps } from './Page';

class SecondPageComponent extends Component implements Page {
  props: PageProps;

  static config: PageConfig = {
    path: '/second',
    title: 'Second',
    primary: true,
  };

  render() {
    return (
      <Box pad={{ horizontal: 'medium' }}>
        Second
        <Anchor path="/second/sub">SubPage</Anchor>
      </Box>
    );
  }
}

export default SecondPageComponent;
